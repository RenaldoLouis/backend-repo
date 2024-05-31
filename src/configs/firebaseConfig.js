const serviceAccount = require("../../ebuddy-4878b-firebase-adminsdk-qz5ug-dba71e65f9.json");
const { initializeApp, cert } = require("firebase-admin/app");

// ebuddy-4878b.firebaseio.com
initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.databaseURL
});

const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();


module.exports = {
    db
}