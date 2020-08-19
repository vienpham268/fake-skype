import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDqC-7Pi0o_da5focU9IMR15Q4lHvGArho",
  authDomain: "fake-skype.firebaseapp.com",
  databaseURL: "https://fake-skype.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
