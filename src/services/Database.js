import { auth, db } from "../config/firebase.config";
import {
  doc,
  setDoc,
  Timestamp,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

//Create a New User Function.
export const createUserOnRegister = (user, username) => {
  const userRef = doc(db, "users", user.uid);
  const userData = {
    email: user.email,
    username: username,
    role: "cosplayer",
    dateCreated: Timestamp.fromDate(new Date()),
  };
  return setDoc(userRef, userData);
};

// Get All Users Function.
export const getAllUsers = async () => {
  const users = [];
  // Query the firestore db for the collection of users
  const querySnapshot = await getDocs(collection(db, "users"));
  // Loop through the users collection and retrieve the uid of each user
  querySnapshot.forEach((doc) => {
    let user = { ...doc.data(), uid: doc.id };
    users.push(user);
  });
  return users;
};

//Create a new competition item in the firestore db.
export const newCompetition = (competition) => {
  return addDoc(collection(db, "competitions"), competition);
};

// Return the collection of competitions from the firestore db.
export const getCompetitionCollectionListener = () => {
  return collection(db, "competitions");
};

// Return the collection of entries.
export const getEntryOfCompetition = async (id) => {
  let entries = [];

  const collectionRef = collection(db, "competitions/" + id + "/entries");
  const collectionSnapshot = await getDocs(collectionRef);

  collectionSnapshot.forEach((doc) => {
    entries.push(doc.data());
  });
  return entries;
};

// Add a new Entry to the Competition collection.
export const addEntryToCompetition = async (data, id) => {
  const collectionRef = collection(db, "competitions/" + id + "/entries");
  // const collectionSnapshot = await addDoc(collectionRef, data);
  return addDoc(collectionRef, data);
};

// VOTING FUNCTIONS
//
// Add New Vote Count to Entry
// export const addVoteCountToEntry = (data, id) => {
  
//   const collectionRef = collection(db, "entries/" + id + "/votes");

//   const voteCount = {
//     uid: auth.currentUser.uid(),
//     voteCount: auth.currentUser.voteCount(),
//   }

//   return addDoc(collectionRef, data)
// }

// // Get Entries collection from firestore db
// // Return the collection of competition from the firestore db.
// export const getEntriesCollectionListener = () => {
//   return collection(db, "entries");
// };

// Get Vote Count from Entry
