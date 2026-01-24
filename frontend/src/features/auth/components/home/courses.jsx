import { HOME_CONTENT } from "../../../../config/home.config";

export default function Courses() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Featured Courses
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {HOME_CONTENT.courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}

const CourseCard = ({ title, instructor }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
    <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300" />
    <div className="p-5">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-500">
        {instructor}
      </p>
    </div>
  </div>
);
