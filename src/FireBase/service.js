import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const addDocoment = (user, data) => {
  const query = collection(db, user);
  addDoc(query, { ...data, createdAt: serverTimestamp() });
};
