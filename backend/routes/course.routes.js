import express from "express";
import {
  createCourse,
  publishCourse,
  getAllCourses,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

/**
 * =========================
 * PUBLIC ROUTES
 * =========================
 */

// Get all published courses (with filters)
router.get("/", getAllCourses);

// Get single course by slug
router.get("/:slug", getCourseBySlug);

/**
 * =========================
 * ADMIN ROUTES
 * =========================
 */

// Create new course
router.post(
  "/",
  protect,
  authorize("admin"),
  createCourse
);

// Publish course
router.put(
  "/:id/publish",
  protect,
  authorize("admin"),
  publishCourse
);

// Update course
router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateCourse
);

// Delete course
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteCourse
);

export default router;
