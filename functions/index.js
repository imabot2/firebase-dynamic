// Firebase functions
const functions = require("firebase-functions");

// Create an app with Express
const express = require("express");
const app = express();

// Any URL starting with /app/id will call this function
app.get("/app/:id", (req, res) => {
    res.send("ID = " + req.params.id);
});

// Export the app
exports.app = functions.https.onRequest(app);