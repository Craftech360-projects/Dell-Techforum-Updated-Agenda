import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroBackground}
          alt="Abstract tech background"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Sessions to inspire innovation
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Explore the catalogue of sessions designed to help you lead your organisation into the 
            future. Revolutionise how you innovate and operate with Artificial Intelligence, meet 
            today's needs and accelerate innovation with Modern Data Centers and Multicloud, 
            and transform intelligence, productivity and collaboration with a Modern Workplace and PCs.
          </p>
          <Button className="bg-dell-blue hover:bg-dell-blue-dark text-white px-8 py-3 text-lg font-medium">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;