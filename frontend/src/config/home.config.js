import { BRANDING } from "./branding.config";
import { ROUTES } from "./routes.config";

export const HOME_CONTENT = {
  navbar: {
    brand: BRANDING.appName,
    links: [
      { label: "Courses", path:ROUTES.courses  },
      { label: "Categories", path:ROUTES.categories},
      { label: "About", path: ROUTES.about},
    ],
    actions: {
      login: "Login",
      signup: "Sign Up",
    },
  },
  
  
  hero: {
    title: "Learn Skills That Actually Matter",
    subtitle:
      "Build real-world skills with expert-led courses and hands-on projects",
    primaryBtn: "Explore Courses",
    secondaryBtn: "Start Free",
  },

  categories: [
    "Web Development",
    "Data Science",
    "AI & ML",
    "UI / UX Design",
    "Business",
    "Marketing",
  ],

  courses: [
    {
      title: "Full Stack Web Development",
      instructor: "John Carter",
    },
    {
      title: "Data Science for Beginners",
      instructor: "Sarah Lee",
    },
    {
      title: "AI Basics & Applications",
      instructor: "Alex Morgan",
    },
  ],

  cta: {
    title: "Start Learning Today",
    button: "Join Now",
  },

  footer: {
    text: "© 2026 EduLearn. All rights reserved.",
  },
};
