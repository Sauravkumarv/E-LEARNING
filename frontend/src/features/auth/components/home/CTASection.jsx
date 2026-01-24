import { HOME_CONTENT } from "../../../../config/home.config";
import Button from "../../../../shared/ui/layout/auth/Button";

export default function CTASection() {
  const { cta } = HOME_CONTENT;

  return (
    <section className="bg-indigo-700 text-white py-16 text-center px-4">
      <h2 className="text-2xl font-semibold mb-6">
        {cta.title}
      </h2>

      <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium hover:scale-105 transition">
        {cta.button}
      </button>
    </section>
  );
}
