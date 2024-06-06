const dotenv = require('dotenv');


dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  FIREBASE_API_KEY,
  AFIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env;



const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: AFIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
  port:PORT,
  host:HOST,
  host_url:HOST_URL
};

module.exports = { config };
