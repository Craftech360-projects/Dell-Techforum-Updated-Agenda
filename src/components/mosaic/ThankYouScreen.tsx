import React from "react";

interface ThankYouScreenProps {
  onRestart: () => void;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({
  onRestart,
}) => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./bg.png')`,
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-white font-bold text-4xl mt-10">Thank You!</h2>
            <button
              onClick={onRestart}
              className="px-5 py-2 bg-blue-600 text-white rounded-xs font-medium hover:bg-blue-700 transition-colors mt-10"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};
