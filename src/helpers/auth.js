import { auth } from "../services/firebase";

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
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
