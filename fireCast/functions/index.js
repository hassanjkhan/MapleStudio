const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();
// const auth = admin.auth();
const db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.contactEmailTrigger = functions.https.onCall((data) => {
  const {to, subject, text} = data;

  if (typeof to !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "to1");
  }

  if (typeof subject !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "s1");
  }

  if (typeof text !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "t1");
  }

  try {
    db.collection("mail")
        .add({
          to,
          message: {
            subject,
            text,
          },
        })
        .then(() => {
          return "sent email";
        });
  } catch (err) {
    console.log(err);
    return err;
  }
});
