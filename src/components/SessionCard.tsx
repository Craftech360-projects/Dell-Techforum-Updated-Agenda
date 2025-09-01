import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SessionDetailModal from "./SessionDetailModal";
import { useState, useRef } from "react";
import sessionsData from "../data/sessions.json";

interface SessionCardProps {
  time: string;
  endTime?: string;
  title: string;
  code?: string;
  category: string;
  description?: string;
  speaker?: {
    name: string;
    title: string;
    company: string;
    image?: string;
  };
  isGeneralSession?: boolean;
  isSpecialSession?: boolean;
}

const getCategoryColor = (category: string) => {
  // Using light gray for all categories
  return 'bg-gray-100 text-gray-600';
};

const SessionCard = ({ 
  time, 
  endTime, 
  title, 
  code, 
  category, 
  description, 
  speaker,
  isGeneralSession = false,
  isSpecialSession = false
}: SessionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const featuredCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollAmount = 300; // Adjust scroll distance as needed
      const currentScroll = ref.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      ref.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const getSessionData = () => {
    // Find session data from JSON if available
    const sessionFromJson = sessionsData.sessions.find((s) => s.code === code);
    
    if (sessionFromJson) {
      return {
        title: sessionFromJson.title,
        code: sessionFromJson.code,
        date: sessionFromJson.date,
        time: sessionFromJson.startTime,
        endTime: sessionFromJson.endTime,
        category: sessionFromJson.category,
        description: sessionFromJson.description,
        speakers: sessionFromJson.speakers,
        agenda: sessionFromJson.agenda
      };
    }
    
    // Fallback to props data
    return {
      title,
      code: code || '',
      date: '3 September 2025',
      time,
      endTime: endTime || '',
      category,
      description,
      speakers: speaker ? [speaker] : undefined
    };
  };

  const sessionData = getSessionData();

  // Special session card (GEN-002) - Celebrity Session
  if (isSpecialSession) {
    return (
      <Card className="p-4 border-2 border-blue-200 bg-blue-50/30">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            {title} [{code}]
          </h3>
          
          <div className="text-gray-700 mb-4">
            <p className="mb-4 font-semibold">{description}</p>
            
            {/* Detailed session content */}
            <div className="space-y-4 text-sm">
              <p>
                What happens when rocket science meets reel life? When the precision of space missions converges with the imagination of cinema? At Dell Technologies Forum 2025, brace yourself for a once-in-a-lifetime exchange between two trailblazers whose worlds, though different, are bound by vision, courage, and creativity.
              </p>
              
              <p>
                On one side is Dr. S. Somanath, Indian space scientist and former Chairman of ISRO, who has been at the forefront of India's most ambitious missions. From Chandrayaan-3's historic lunar landing to bold plans for interplanetary exploration, his leadership has cemented India's place among the world's leading space powers and inspired a generation to look skyward.
              </p>
              
              <p>
                On the other side is R. Balki, former Chairman and Chief Creative Officer of Lowe Lintas, and one of India's most celebrated Hindi film writer–director–producers. Known for cinema that blends intellect, emotion, and originality, Balki has created landmark films like Paa and Pad Man, and brought science closer to society with the space drama Mission Mangal. His stories have moved millions while redefining the language of modern Indian cinema.
              </p>
              
              <p>
                Together, they will explore the surprising parallels between space exploration and filmmaking: the rigor of science and the freedom of art, the lessons of failure and resilience, and the power of imagination to turn complexity into clarity and ambition into impact.
              </p>
            </div>
          </div>

          {/* Speakers carousel */}
          {sessionData.speakers && sessionData.speakers.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={() => scrollCarousel('left', carouselRef)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Carousel Container with fixed width */}
                <div className="mx-10 overflow-hidden">
                  <div ref={carouselRef} className="flex gap-3 overflow-x-auto pb-2 scroll-smooth scrollbar-hide">
                    {sessionData.speakers.map((spk, idx) => (
                      <div key={idx} className="flex items-center gap-2 min-w-[250px] flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                          {spk.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-900 text-sm truncate">{spk.name}</h5>
                          <p className="text-xs text-gray-600 truncate">{spk.title}</p>
                          {spk.company && <p className="text-xs text-gray-500 truncate">{spk.company}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => scrollCarousel('right', carouselRef)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        <SessionDetailModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sessionData={sessionData}
          isGeneralSession={false}
        />
      </Card>
    );
  }

  // Featured session card (GEN00-P)
  if (isGeneralSession) {
    return (
      <Card className="p-4 border-2 border-blue-200 bg-blue-50/30 w-full max-w-full overflow-hidden">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded text-sm font-semibold mb-3">
            Featured
          </span>
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            {title} [{code}]
          </h3>
          
          {/* Time slots with descriptions */}
          <div className="space-y-2 mb-4">
            <div className="text-gray-700">
              <span className="font-semibold">[09:00 AM - 09:25 AM]</span> Opening Performance by our Guest Artists - Carnatic 2.0
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">[09:30 AM - 09:40 AM]</span> Welcome & Introduction by Mandira Bedi, Actor, Fashion Designer, & Television Presenter
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">[09:50 AM - 10:10 AM]</span> A Billion Dreams. One Digital Future
            </div>
            <ul className="ml-6 text-gray-600">
              <li className="list-disc">
                <span className="font-semibold">Host:</span> Manish Gupta, President & Managing Director, Dell Technologies India
              </li>
            </ul>
            <div className="text-gray-700">
              <span className="font-semibold">[10:30 AM - 11:00 AM]</span> Transform Innovation Into Action
            </div>
            <ul className="ml-6 text-gray-600">
              <li className="list-disc">
                <span className="font-semibold">Host:</span> Sam Burd, President and Chief Strategy Officer, Dell Technologies
              </li>
            </ul>
            <div className="text-gray-700">
              <span className="font-semibold">[11:00 AM - 11:45 AM]</span> Panel Discussion: AI - India's New Big Frontier
            </div>
            <ul className="ml-6 text-gray-600 space-y-1">
              <li className="list-disc">Ganesh Gopalan, Co-Founder & CEO, Gnani.AI</li>
              <li className="list-disc">Shankar Subramanian, General Manager - AI Sales, Asia Pacific & Japan, Dell Technologies</li>
              <li className="list-disc">Sharad Sanghi, Founder & CEO, Neysa Network Pvt. Ltd.</li>
              <li className="list-disc">Umakant Soni, Chairman, AI Foundry</li>
            </ul>
            <div className="text-gray-700">
              <span className="font-semibold">[11:45 AM - 11:55 AM]</span> Closing Remarks | Transition to Solutions Expo
            </div>
          </div>

          {/* Speakers carousel */}
          {sessionData.speakers && sessionData.speakers.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="relative">
                {/* Left Arrow */}
                {sessionData.speakers.length > 3 && (
                  <button
                    onClick={() => scrollCarousel('left', featuredCarouselRef)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}

                {/* Carousel Container - Show max 3 speakers at a time */}
                <div className="mx-10 overflow-hidden">
                  <div 
                    ref={featuredCarouselRef} 
                    className="flex gap-4"
                    style={{
                      display: 'flex',
                      overflowX: sessionData.speakers.length > 3 ? 'auto' : 'visible',
                      scrollBehavior: 'smooth',
                      msOverflowStyle: 'none',
                      scrollbarWidth: 'none',
                      WebkitScrollbar: { display: 'none' }
                    }}
                  >
                    {sessionData.speakers.map((spk, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 flex-shrink-0"
                        style={{ width: sessionData.speakers.length > 3 ? '280px' : 'auto', flex: sessionData.speakers.length <= 3 ? '1' : 'none' }}
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                          {spk.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-gray-900 text-sm truncate">{spk.name}</h5>
                          <p className="text-xs text-gray-600 truncate">{spk.title}</p>
                          {spk.company && <p className="text-xs text-gray-500 truncate">{spk.company}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                {sessionData.speakers.length > 3 && (
                  <button
                    onClick={() => scrollCarousel('right', featuredCarouselRef)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <SessionDetailModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sessionData={sessionData}
          isGeneralSession={isGeneralSession}
        />
      </Card>
    );
  }

  // Regular session card
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      {/* Title */}
      <h4 
        className="text-lg font-semibold text-[#1d56c0] mb-3 cursor-pointer hover:underline"
        onClick={() => setIsModalOpen(true)}
      >
        {title} [{code}]
      </h4>

      {/* Category chip */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
          {category}
        </span>
      </div>

      {/* Description */}
      {description && (
        <div className="mb-4">
          <p className="text-gray-600 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      )}

      {/* Speaker details */}
      {sessionData.speakers && sessionData.speakers.length > 0 && (
        <div className="flex items-start gap-3 mt-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
            {sessionData.speakers[0].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="flex-1">
            <h5 className="font-semibold text-gray-900">{sessionData.speakers[0].name}</h5>
            <p className="text-sm text-gray-600">{sessionData.speakers[0].title}</p>
            <p className="text-sm text-gray-500">{sessionData.speakers[0].company}</p>
          </div>
        </div>
      )}

      <SessionDetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionData={getSessionData()}
        isGeneralSession={isGeneralSession}
      />
    </Card>
  );
};

export default SessionCard;