import express from 'express'
import { forgotPassword, login, logout, register, resetPassword } from '../controller/auth.js';
const router=express.Router();

router.post('/auth/signup',register);
router.post('/auth/login',login);
router.post('/auth/logout',logout)
router.post("/auth/forgot-password", forgotPassword);
router.post("/auth/reset-password/:token", resetPassword);

export default router