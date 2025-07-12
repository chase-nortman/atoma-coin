
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import EcosystemIntegration from "@/components/EcosystemIntegration";
import Testimonials from "@/components/Testimonials";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/60 via-yellow-50/40 to-pink-100/60">
      <Hero />
      <Mission />
      <Tokenomics />
      <Roadmap />
      <EcosystemIntegration />
      <Testimonials />
      <Recruitment />
      <Footer />
    </div>
  );
};

export default Index;
