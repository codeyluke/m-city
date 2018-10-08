import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDk4DbjpibQVBNdTVy0Ngc5XpNq2gCumBo",
  authDomain: "m-city-d967a.firebaseapp.com",
  databaseURL: "https://m-city-d967a.firebaseio.com",
  projectId: "m-city-d967a",
  storageBucket: "m-city-d967a.appspot.com",
  messagingSenderId: "1015366860863"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseDB, firebaseMatches, firebasePromotions };
