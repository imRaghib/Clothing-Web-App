import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ5IqeciaJ5FNTmfC_nZC6lEY8vfJ_gXU",
  authDomain: "clothing-db-2a31e.firebaseapp.com",
  projectId: "clothing-db-2a31e",
  storageBucket: "clothing-db-2a31e.appspot.com",
  messagingSenderId: "664423135744",
  appId: "1:664423135744:web:9b5a7a1e3b25b5fbc236e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Initialize Database
export const db = getFirestore();

export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, "USERS", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
