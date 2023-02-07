import express from "express";
import { getUsers, getUserbyId, saveUser, editUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', saveUser);
router.patch('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

export default router;