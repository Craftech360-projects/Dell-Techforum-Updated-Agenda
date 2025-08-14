const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-white">
            Let us assist you with any questions you have about Dell Technologies Forum. 
            Please reach out to us at:{" "}
            <a 
              href="mailto:dellforum2025@kestoneglobal.biz" 
              className="text-blue-400 hover:underline"
            >
              dellforum2025@kestoneglobal.biz
            </a>
          </p>
          
          <div className="flex justify-center space-x-6 text-sm text-white">
            <a href="https://www.dell.com/learn/us/en/uscorp1/policies-privacy-country-specific-privacy-policy" className="hover:text-blue-400 underline">
              Privacy Statement
            </a>
          </div>
          
          <p className="text-sm text-white">
            Dell Technologies Global Headquarters is located at One Dell Way, Round Rock, TX 78682
          </p>
          
          <p className="text-sm text-white">
            Copyright © 2025 Dell Inc. or its subsidiaries. All Rights Reserved. Dell Technologies, Dell and other trademarks are trademarks of Dell Inc. or its subsidiaries. Other trademarks may be trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;