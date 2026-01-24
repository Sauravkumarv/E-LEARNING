import { HOME_CONTENT } from "../../../../config/home.config";
export default function HeroSection() {
  const { hero } = HOME_CONTENT;
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-4">
      {" "}
      <div className="max-w-4xl mx-auto text-center">
        {" "}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {" "}
          {hero.title}{" "}
        </h1>{" "}
        <p className="text-sm md:text-lg opacity-90 mb-8"> {hero.subtitle} </p>{" "}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {" "}
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:scale-105 transition">
            {" "}
            {hero.primaryBtn}{" "}
          </button>{" "}
          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white/10 transition">
            {" "}
            {hero.secondaryBtn}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
