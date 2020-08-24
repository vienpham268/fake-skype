import { auth } from "../services/firebase";

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

<<<<<<< HEAD
export function signInWithGoogle() {
=======
export function signInWithGoogleAccount() {
>>>>>>> e27dcb219e6bb1be24dfc4ac6757f1576465d32f
  const ggProvider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(ggProvider);
}

<<<<<<< HEAD
export function signInWithFacebook() {
=======
export function signInWithFacebookAccount() {
>>>>>>> e27dcb219e6bb1be24dfc4ac6757f1576465d32f
  const fbProvider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(fbProvider);
}
