import { Router } from "express";
import { checkAuth, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { authValidator } from "../validation/authValidator.js";

const router = Router()

router.post('/signup', authValidator, signup)
router.post('/login', login)
router.post('/logout', logout)
router.get('/check',protectRoute, checkAuth)

export default router