import BannerSection from "@/components/BannerSection";
import PopularThemes from "@/components/PopularThemes";
import Proced from "@/components/Proced";
import ProcessSection from "@/components/ProcessSolution";
import { Resources } from "@/components/Resources";
import ServicesSection from "@/components/Service";
import Testimonials from "@/components/Testimonials";
const Home = () => {
  return (
    <div>
      <BannerSection />
      {/* <CustomerPreview /> */}
      <ProcessSection />
      <ServicesSection />
      <PopularThemes />
      <Proced />
      <Resources />
      <Testimonials />
    </div>
  );
};

export default Home