const firebase = require("../firebase");
const {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
} = require("firebase/firestore");

const db = getFirestore(firebase);

const createCompetition = async (req, res, next) => {
  try {
    const data = req.body;
    const competitionsCollection = collection(db, "Competitions");
    const docRef = doc(competitionsCollection);
    const id = docRef.id;
    await setDoc(docRef, { ...data, id });
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCompetitions = async (req, res, next) => {
  const today = new Date();
  try {
    const competitionsRef = collection(db, "Competitions");
    const querySnapshot = await getDocs(competitionsRef);

    querySnapshot.forEach(async (doc) => {
      const competitionData = doc.data();
      if (
        new Date(competitionData.due_date.seconds*1000)< today &&
        competitionData.isActive
      ) {
        await updateDoc(doc.ref, { isActive: false });
      }
    });

    const competitions = [];
    querySnapshot.forEach((doc) => {
      competitions.push({ id: doc.id, ...doc.data() });
    });
    await Promise.all(competitions.map(updateCompetitionStatus));

    competitions.sort((a, b) => b.due_date - a.due_date);

    res.status(201).send(competitions);
  } catch (error) {
    res.status(400).send({message:error.message});
  }
};

const updateCompetition = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const docRef = doc(db, "Competitions", id);
    await updateDoc(docRef, data);
    res.status(203).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCompetition = async (req, res, next) => {
  try {
    const id = req.params.id;
    const docRef = doc(db, "Competitions", id);
    await deleteDoc(docRef);
    res.status(207).send("Competition deleted succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//FUNCTIONS
const updateCompetitionStatus = async (competition) => {
  const currentDate = new Date();
  const dueDate = new Date(competition.due_date.seconds*1000); 

  if (currentDate > dueDate) {
    try {
      await updateDoc(doc(db, 'Competitions', competition.id), {
        isActive: false
      });
    } catch (error) {
      throw error;
    }
  } 
};


module.exports = {
  createCompetition,
  getCompetitions,
  updateCompetition,
  deleteCompetition,
};

