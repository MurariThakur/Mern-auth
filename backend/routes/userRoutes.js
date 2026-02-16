import express from "express";
import { getUserDetails } from "../controller/userController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.get("/data", userAuth, getUserDetails);

export default router;