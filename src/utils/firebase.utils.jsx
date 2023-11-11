import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// Initialize Database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionName,
  documentstoAdd
) => {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);

  documentstoAdd.forEach((document) => {
    const docRef = doc(collectionRef, document.title.toLowerCase()); // doc.title.toLowerCase() this will set as the document name
    batch.set(docRef, document); // this will batch each doc creation call and if one fails, it will cancel all.
  });

  await batch.commit();
  console.log("Successful");
};

export const getCategoriesAndDocuments = async () => {
  const collectRef = collection(db, "CATEGORIES");
  const queryObj = query(collectRef);

  const querySnapshot = await getDocs(queryObj);
  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
  return categoryMap;
};

export const createUserDoc = async (userAuth, additionalInfo = {}) => {
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createUser = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const authStateListener = (callback) =>
  onAuthStateChanged(auth, callback);
