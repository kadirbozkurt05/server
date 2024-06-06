const firebase = require("../firebase");
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} = require("firebase/firestore");

const db = getFirestore(firebase);

const apply = async (req, res, next) => {
  try {
    const data = req.body;
    const applicationsCollection = collection(db, "Applications");
    const docRef = doc(applicationsCollection);
    const id = docRef.id;
    await setDoc(docRef, { ...data, id });
    res.status(201).send({ data });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const contact = async (req, res, next) => {
  try {
    const data = req.body;
    const applicationsCollection = collection(db, "ContactForm");
    const docRef = doc(applicationsCollection);
    const id = docRef.id;
    await setDoc(docRef, { ...data, id });
    res.status(201).send({ data });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const newsletter = async (req, res, next) => {
  try {
    const data = req.body;
    const newsDocRef = doc(db, "Newsletter", "list");
    await updateDoc(newsDocRef, {
      all: arrayUnion(data.email),
    });
    res.status(201).send({ data });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { apply, newsletter, contact };
