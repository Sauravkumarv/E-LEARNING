import { HOME_CONTENT } from "../../../../config/home.config";

export default function Categories() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {HOME_CONTENT.categories.map((item) => (
          <div
            key={item}
            className="bg-white shadow hover:shadow-lg p-5 rounded-xl text-center text-sm font-medium cursor-pointer transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
