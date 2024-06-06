const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
  getAllUsers,
  deleteUser,
  login,
  uploadProfilePicture,
  updateLessonDone,
  addImageAndGetUrl,
  addNoteToUser,
  addNextLessonToUser,
  addHomeworkToUser,
  updatePassword,
  resetPassword,
} = require("../controllers/userController.js");
const checkAdmin = require("../middlewares/checkAdmin.js");

const userRouter = express.Router();

userRouter.post("/user/create", createUser);
userRouter.get("/user/:id",  getUser);
userRouter.put("/user/:id",  updateUser);
userRouter.get("/users/all",  getAllUsers);
userRouter.delete("/user/delete", deleteUser);
userRouter.post("/user/login", login);
userRouter.get("/user/reset-password", resetPassword);
userRouter.post("/user/change-password", updatePassword);
userRouter.post("/user/upload-photo", uploadProfilePicture);
userRouter.post("/user/update-lesson",  updateLessonDone);
userRouter.post("/user/add-image", addImageAndGetUrl);
userRouter.post("/user/add-note",  addNoteToUser);
userRouter.post("/user/add-lesson",  addNextLessonToUser);
userRouter.post("/user/give-homework",  addHomeworkToUser);

module.exports = userRouter;
