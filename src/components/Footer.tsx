const Footer = () => {
  return (
    <footer className="bg-white border-t border-dell-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Let us assist you with any questions you have about Dell Technologies Forum. 
            Please reach out to us at:{" "}
            <a 
              href="mailto:dellforum2025@kestoneglobal.biz" 
              className="text-dell-blue hover:underline"
            >
              dellforum2025@kestoneglobal.biz
            </a>
          </p>
          
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-dell-blue">
              Privacy Statement
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Dell Technologies Global Headquarters is located at One Dell Way, Round Rock, TX 78682
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;