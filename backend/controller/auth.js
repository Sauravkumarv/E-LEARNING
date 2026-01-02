import { USER } from "../model/user.js";
import validator from "validator";
import crypto from "crypto";

import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";
import nodemailer from "nodemailer";




export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid Email format" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "password must be of 6 digits" });
    }
    // console.log(req.body)

    const user = await USER.findOne({ email });
    if (user!=null) {
      return res.status(400).json({ message: "User already Exists" });
    }

    const newUser = await USER.create({
      username,
      email,
      password,
    });
    return res
      .status(201)
      .json({ message: "User registed successfully", newUser:{username,email} });
  } catch (error) {
    console.log("Error while creating newUser in registerControlller", error);
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

     res.cookie("accessToken", accessToken, {
      httpOnly: true,       
      secure: false,         
      sameSite: "strict",
      maxAge: 15 * 60 * 1000 
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,         
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 
    });

    const { password: _, ...userData } = user._doc;

    return res.status(200).json({
      message: "Login successful",
      user: userData,
          });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};


export const logout = async (req, res) => {
  try {
        res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      message: "Server error during logout",
    });
  }
};




export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
 const message = `
      <h2>Password Reset Request</h2>
      <p>You requested to reset your password.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
      <p>This link is valid for 15 minutes.</p>
      <p>If you did not request this, please ignore this email.</p>
    `;

    await sendEmail({
      to: user.email,
      subject: "Reset Your Password",
      html: message,
    });

  
    console.log("RESET LINK:", resetUrl);

    return res.status(200).json({
      message: "Password reset link sent to email",
    });

  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



export const resetPassword = async (req, res) => {
  try {
    const resetToken = req.params.token;
    const { password, confirmPassword } = req.body;

    if (!password || !confirmPassword) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // Hash token
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const user = await USER.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Token invalid or expired" });
    }

    // Set new password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
    });

  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};



