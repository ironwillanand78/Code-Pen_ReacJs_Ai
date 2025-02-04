import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVCDA64wFbmfLk_jkgbbICCwuPjAv9VQM",
  authDomain: "codepen-clone-abaf1.firebaseapp.com",
  projectId: "codepen-clone-abaf1",
  storageBucket: "codepen-clone-abaf1.firebasestorage.app",
  messagingSenderId: "258282109750",
  appId: "1:258282109750:web:dccae3e711f6356621d197",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
// explicitly asking for users email id in the firebase to add in the users identifiers seciton..
googleAuthProvider.addScope("email");

export const githubAuthProvider = new GithubAuthProvider();

export const signOutUser = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};
