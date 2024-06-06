const firebase = require("../firebase");
const {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc
} = require("firebase/firestore");

const db = getFirestore(firebase);

const createNews = async (req, res, next) => {
  try {
    const data = req.body;
    const newsCollection = collection(db, "News");
    const docRef = doc(newsCollection);
    const id = docRef.id;
    await setDoc(docRef, { ...data, id });
    res.status(201).send({ data });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getNews = async (req, res, next) => {
  try {
    const newsRef = collection(db, "News");
    const querySnapshot = await getDocs(newsRef);

    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });

    news.sort((a, b) => b.due_date - a.due_date);

    res.status(201).send(news);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateNews = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const docRef = doc(db, "News", id);
    await updateDoc(docRef, data);
    res.status(203).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteNews = async (req, res, next) => {
  try {
    const id = req.params.id;
    const docRef = doc(db, "News", id);
    await deleteDoc(docRef);
    res.status(207).send("News deleted succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { 
  createNews, 
  getNews, 
  updateNews, 
  deleteNews 
};

