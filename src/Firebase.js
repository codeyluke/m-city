import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

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
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseDB,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers
};
