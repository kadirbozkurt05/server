// const admin = require("firebase-admin")
// const serviceKey = require("./../serviceAccountKey.json")

// const config = {
//   credential: admin.credential.cert(serviceKey),
// };
// admin.initializeApp(config)

// const authenticate = async (req, res, next) => {
//   const idToken = req.cookies.auth;
//   if (!idToken) {
//     return res.status(401).send('Unauthorized');
//   }


//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     res.status(401).send('Unauthorized');
//   }
// };

// module.exports = authenticate;
