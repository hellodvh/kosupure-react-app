import { auth, db } from "../services/firebaseConfig";
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
