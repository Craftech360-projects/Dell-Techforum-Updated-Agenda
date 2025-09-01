import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-black mb-6">
            Sessions to inspire innovation
          </h1>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Explore the catalogue of sessions designed to help you lead your organisation into the 
            future. Revolutionise how you innovate and operate with Artificial Intelligence, meet 
            today's needs and accelerate innovation with Modern Data Centers and Multicloud, 
            and transform intelligence, productivity and collaboration with a Modern Workplace and PCs.
          </p>
          <a 
            href="https://events.dell.com/event/ce41472d-5711-44d9-a130-0515155e31b9/regPage:38a9f1a9-4600-4348-813b-6e940c40b89b?RefId=ba_APJ_INDM_cal&i=&locale=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#1d56c0] hover:bg-[#0c3f85] text-white px-4 py-3 text-md font-medium rounded-xs">
              Register Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;