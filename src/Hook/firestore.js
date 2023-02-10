import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FireBase/config";
export const useFireStore = (conllection, condition) => {
  const [document, setDocument] = useState([]);

  useEffect(() => {
    let collectionRef = collection(db, conllection);
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      query(
        collectionRef,
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
    }
    const unsubcribe = onSnapshot(
      collectionRef,
      orderBy("createAt"),
      (snapshot) => {
        const document = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDocument(document);
      }
    );
    return unsubcribe;
  }, [conllection, condition]);
  return document;
};
