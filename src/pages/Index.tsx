import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgendaGlance from "@/components/AgendaGlance";
import SessionsTimeline from "@/components/SessionsTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AgendaGlance />
      <SessionsTimeline />
      <Footer />
    </div>
  );
};

export default Index;
