import BannerSection from "@/components/BannerSection";
import Index from "@/components/Index";
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
    </div>
  );
};

export default Home