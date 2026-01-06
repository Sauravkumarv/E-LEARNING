import CourseService from "../services/course.service.js";

export const createCourse = async (req, res) => {
  try {
    const course = await CourseService.createCourse(
      req.body,
      req.user.id
    );
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
