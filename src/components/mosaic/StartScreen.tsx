import React from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./bg.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute " />
      
      {/* Logo Section - Center */}
      <div className="relative h-full z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          {/* Animated Logo */}
          <div className="">
            <div className="w-full h-full flex items-center justify-center animate-pulse ">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-80 h-80 object-contain animate-fade-in"
                style={{
                  animation: 'fadeInScale 2s ease-out'
                }}
              />
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Start Button - Bottom */}
<div className="relative z-10 px-6 pb-8 flex justify-center items-center bottom-40">
  <button
    onClick={onStart}
    className="group relative w-32 h-12 bg-transparent border-none"
    style={{
      backgroundImage: 'url("./start.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute', // Keep the button absolutely positioned
      top: '-10px', // Adjust this value to control how high the button is
    }}
  >

  </button>
</div>



      
      {/* Custom Animations */}
      <style >{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
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
        
        .animate-fade-in {
          animation: fadeInScale 2s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};