import { auth, db } from "../services/firebase";

export function signup(email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      db.ref(`users/${userCredential.user.uid}/`).set({
        _id: userCredential.user.uid,
        fullName: userCredential.user.displayName,
        email: userCredential.user.email,
        groups: [],
        profilePic: "",
      });
    });
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogleAccount() {
  const ggProvider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(ggProvider);
}

export function signInWithFacebookAccount() {
  const fbProvider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(fbProvider);
}
