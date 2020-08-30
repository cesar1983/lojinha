// const admin = require("firebase-admin");

// var serviceAccount = require("./admin.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   authDomain: "ziro-17a9f.firebaseapp.com",
//   databaseURL: "https://ziro-17a9f.firebaseio.com",
// });

// const db = admin.database();
// const ordersRef = db.ref("orders");

// exports.handler = function (event, context, callback) {
//   ordersRef.on(
//     "value",
//     function (snapshot) {
//       callback(null, {
//         statusCode: 200,
//         body: JSON.stringify(snapshot.val()),
//       });
//     },
//     function (errorObject) {
//       console.log("The read failed: " + errorObject.code);
//     }
//   );
// };
