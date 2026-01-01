import { Router } from "express";
import {
  createStat,
  deleteStat,
  getAllStats,
  getOneStat,
  updateStat,
} from "../controllers/stat.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, getAllStats);
router.get("/:id", getOneStat);
router.post("/user", protectRoute, createStat);
router.delete("/:id", deleteStat);
router.put("/:id", updateStat);

export default router;
