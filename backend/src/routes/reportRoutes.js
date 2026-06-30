import express from "express";

import {
  createReport,
  getMyReports,
  getReportById,
  getNearbyReports,
} from "../controllers/reportController.js";

import {
  verifyToken,
  requireCitizen,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, requireCitizen, createReport);

router.get("/my", verifyToken, requireCitizen, getMyReports);

router.get("/nearby", verifyToken, requireCitizen, getNearbyReports);

router.get("/:id", verifyToken, requireCitizen, getReportById);

export default router;