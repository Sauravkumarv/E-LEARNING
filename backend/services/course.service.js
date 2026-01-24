import Course from "../models/Course.js";

class CourseService {

  // CREATE COURSE
  static async createCourse(data, adminId) {

    // 🔒 Rule 1: Admin ownership
    if (!adminId) {
      throw new Error("Unauthorized");
    }

    // 🔒 Rule 2: Required fields
    if (!data.title || !data.description) {
      throw new Error("Title and description are required");
    }

    // 🔒 Rule 3: Slug uniqueness
    const existing = await Course.findOne({ slug: data.slug });
    if (existing) {
      throw new Error("Course with this slug already exists");
    }

    // ✅ Create course in draft mode
    const course = await Course.create({
      ...data,
      createdBy: adminId,
      isPublished: false
    });

    return course;
  }

  // PUBLISH COURSE
  static async publishCourse(courseId) {

    const course = await Course.findById(courseId);

    if (!course) {
      throw new Error("Course not found");
    }

    // 🔒 Rule: Must have lessons
    if (!course.lessons || course.lessons.length === 0) {
      throw new Error("Add lessons before publishing");
    }

    course.isPublished = true;
    await course.save();

    return course;
  }

  // GET PUBLIC COURSES
  static async getPublishedCourses(filters) {

    const query = { isPublished: true };

    if (filters.category) {
      query.category = filters.category;
    }

    if (filters.difficulty) {
      query.difficulty = filters.difficulty;
    }

    return Course.find(query).select("-lessons.contentHtml");
  }
}

export default CourseService;
