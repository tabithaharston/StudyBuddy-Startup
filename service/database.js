const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('studybuddy');
const userCollection = db.collection('user');
const resourceCollection = db.collection('resource');

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

module.exports = { getUser, getUserByToken, addUser, updateUser, getResources, addResource };