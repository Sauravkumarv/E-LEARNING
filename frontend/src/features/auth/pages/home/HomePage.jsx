
import HomeLayout from "../../../../shared/ui/layout/home/HomeLayout";
import Categories from "../../components/home/Categories";
import Courses from "../../components/home/courses";
import CTASection from "../../components/home/CTASection";
import Footer from "../../components/home/Footer";
import HeroSection from "../../components/home/HeroSection";
import Navbar from "../../components/home/Navbar";

export default function HomePage() {
  return (
    <HomeLayout>
      <Navbar />
      <HeroSection />
      <Categories />
      <Courses />
      <CTASection />
      <Footer />
    </HomeLayout>
  );
}
