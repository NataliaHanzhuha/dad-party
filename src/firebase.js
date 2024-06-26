import * as firebase from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const wishCollectionRef =
  collection(db, process.env.REACT_APP_COLLECTION_NAME);
export const emailsCollectionRef =
  collection(db, process.env.REACT_APP_COLLECTION_NAME_EMAILS);

export const storage = getStorage(app);
export const imageLink = (folder, imageName, token = process.env.IMAGE_TOKEN) =>
  `https://firebasestorage.googleapis.com/v0/b/dad-birthday-party.appspot.com/o/${folder}%2F${imageName}?alt=media&token=${token}`;
