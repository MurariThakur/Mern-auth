import express from "express";
import { register, login, logout , sendVerifyOtp, verifyAccount, isAuthenticated, sendResetPasswordOtp, resetPassword } from "../controller/authController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-verify-otp", userAuth, sendVerifyOtp);
router.post("/verify-account", userAuth, verifyAccount);
router.get("/is-authenticated", userAuth, isAuthenticated);
router.post("/send-reset-password-otp", sendResetPasswordOtp);
router.post("/reset-password", resetPassword);


export default router;