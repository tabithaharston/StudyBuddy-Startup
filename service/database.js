const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('studybuddy');
const userCollection = db.collection('user');
const resourceCollection = db.collection('resource');
const sessionCollection = db.collection('session');

// Check the connection once when the server starts
(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`DB connected to ${config.hostname}`);
    } catch (ex) {
        console.log(`Unable to connect to database because ${ex.message}`);
        process.exit(1);
    }
})();

// Users:
function getUser(email) {
    return userCollection.findOne({ email: email });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function updateUser(user) {
    // Replace the stored user with this updated version
    await userCollection.replaceOne({ email: user.email }, user);
}

// Resources:
function getResources() {
    return resourceCollection.find().toArray();
}

async function addResource(resource) {
    await resourceCollection.insertOne(resource);
}

// Study sessions:
function getAllSessions() {
    return sessionCollection.find().toArray();
}

function getSession(id) {
    return sessionCollection.findOne({ id: Number(id) });
}

async function addSession(session) {
    await sessionCollection.insertOne(session);
}

async function updateSession(session) {
    await sessionCollection.replaceOne({ id: session.id }, session);
}

async function seedSessions(sessions) {
    if ((await sessionCollection.countDocuments()) === 0) {
        await sessionCollection.insertMany(sessions);
    }
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    getResources,
    addResource,
    getAllSessions,
    getSession,
    addSession,
    updateSession,
    seedSessions,
};