import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-dell-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              <span className="text-black">DELL</span>
              <span className="text-black font-normal ml-1">Technologies /</span>
              <span className="text-black font-medium ml-2">Forum</span>
            </div>
          </div>
          
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-dell-blue transition-colors">
              Summary
            </a>
            <a href="#" className="text-foreground hover:text-dell-blue transition-colors">
              What to Expect
            </a>
            <a href="#" className="text-dell-blue font-medium border-b-2 border-dell-blue pb-2">
              Agenda
            </a>
            <a href="#" className="text-foreground hover:text-dell-blue transition-colors">
              Speakers
            </a>
            <div className="relative group">
              <button className="text-foreground hover:text-dell-blue transition-colors flex items-center">
                Sponsors
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;