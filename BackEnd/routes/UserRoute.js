import express from "express";
import {
  getUsers,
  getUsersById,
  createUser,
  editUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.patch("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

export default router;
