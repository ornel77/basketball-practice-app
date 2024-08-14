import { Router } from "express";
import { deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/user.controller.js";

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router