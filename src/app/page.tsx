import BannerSection from "@/components/BannerSection";
import HelpFull from "@/components/HelpFull";
import Index from "@/components/Index";
import Proced from "@/components/Proced";
import ProcessSection from "@/components/ProcessSolution";
import ServicesSection from "@/components/Service";
const Home = () => {
  return (
    <div>
      <BannerSection />
      {/* <CustomerPreview /> */}
      <ProcessSection />
      <ServicesSection />
      <Index />
      <Proced />
      <HelpFull />
    </div>
  );
};

export default Home