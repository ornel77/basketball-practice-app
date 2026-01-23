import { Router } from "express";
import { deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.delete('/:id', deleteUser)
router.put('/update', protectRoute, updateUser)

export default router