const { initializeApp } = require('firebase/app');
const { config } = require('./config.js');

const firebaseApp = initializeApp(config);

module.exports =  firebaseApp ;
