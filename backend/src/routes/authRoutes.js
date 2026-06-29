import express from "express";
import {
  signup,
  login,
  demoLogin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/demo-login", demoLogin);

export default router;