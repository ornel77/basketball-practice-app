import { Router } from "express";
import { createStat, deleteStat, getAllStats, getOneStat, updateStat } from "../controllers/stat.controller.js";

const router = Router()

router.get('/', getAllStats)
router.get('/:id', getOneStat)
router.post('/user/:userId', createStat)
router.delete('/:id', deleteStat)
router.put('/:id', updateStat)

export default router