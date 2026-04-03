import Bleed from "./Components/Bleed/Bleed";
import UILandingPage from "./Components/Community/Community";
import Course from "./Components/Course/Course";
import Educore from "./Components/Educore/Educore";
import LandingSection from "./Components/Enroll/LandingSection";
import Faqcta from "./Components/Faqcta/Faqcta.jsx";
import FAQSection from "./Components/FAQSection/FAQSection";
import Footer from "./Components/Footer/Footer";
import HeroPage from "./Components/Hero/Hero";
import Instructor from "./Components/Meet/Meet";
import CourseOverview from "./Components/Module/Module";
import Nav from "./Components/Nav/Nav";
import Reviews from "./Components/Reviews/Reviews.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-black">
        <Nav />
        <HeroPage />
      </div>
      <Bleed />
      <Course />
      <Educore />
      <CourseOverview />
      <Reviews />
      <Instructor />
      <LandingSection />
      <UILandingPage />
      <FAQSection />
      <Faqcta />
      <Footer />
    </div>
  );
}
