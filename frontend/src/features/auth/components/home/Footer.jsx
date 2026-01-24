import { HOME_CONTENT } from "../../../../config/home.config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
      {HOME_CONTENT.footer.text}
    </footer>
  );
}
