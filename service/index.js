const express = require('express');
const app = express();

// The startup service must run on port 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Automatically parse JSON in request bodies
app.use(express.json());

// Serve the bundled React frontend (deployService.sh puts it in "public")
app.use(express.static('public'));

// All of my endpoints will start with /api
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Temporary test endpoint
apiRouter.get('/hello', (_req, res) => {
  res.send({ msg: 'Hello from StudyBuddy' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});