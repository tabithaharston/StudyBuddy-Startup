const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const authCookieName = 'token';

// Users are stored in memory for now (the database comes next deliverable)
let users = [];
let resources = [
  { name: 'CS260_html_notes.pdf', uploader: 'Jordan P.' },
  { name: 'Calc2_final_formulas.docx', uploader: 'Sam R.' },
];

// Every session tracks who joined (attendees), RSVPs (participants), and comments
let studySessions = [
  { id: 101, course: 'Chem 106 Lab Prep', date: '2026-11-10', time: '17:00', location: 'Benson 150' },
  { id: 102, course: 'Stats 221 Homework Help', date: '2026-11-11', time: '15:00', location: 'TMCB 1170' },
  { id: 103, course: 'English 251 Essay Workshop', date: '2026-11-12', time: '13:00', location: 'JFSB B192' },
].map((s) => ({ ...s, attendees: [], participants: [], comments: [] }));

const app = express();

// The startup service must run on port 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Automatically parse JSON in request bodies
app.use(express.json());
app.use(cookieParser());

// Serve the bundled React frontend (deployService.sh puts it in "public")
app.use(express.static('public'));

// All of my endpoints will start with /api
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Register a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password, req.body.name, req.body.role);
        setAuthCookie(res, user.token);
        res.send({ email: user.email, name: user.name });
    }
});

// Log in an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        user.token = uuid.v4();
        setAuthCookie(res, user.token);
        res.send({ email: user.email, name: user.name });
        return;
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// Log out a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Middleware: only lets the request through if the user is logged in
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        req.user = user; // so later endpoints know who is calling
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

// An endpoint that requires an auth token
apiRouter.get('/user/me', verifyAuth, (req, res) => {
    res.send({ email: req.user.email, name: req.user.name, role: req.user.role });
});

// ---------- Helper functions ----------

async function createUser(email, password, name, role) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        email: email,
        password: passwordHash,
        name: name || email,
        role: role || 'student',
        token: uuid.v4(),
    };
    users.push(user);
    return user;
}

async function findUser(field, value) {
    if (!value) return null;
    return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});