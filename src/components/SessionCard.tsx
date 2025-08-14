import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SessionDetailModal from "./SessionDetailModal";
import { useState } from "react";
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
  isGeneralSession = false 
}: SessionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      {isGeneralSession && (
        <div className="mb-4">
          <h3 
            className="text-xl font-bold text-[#1d56c0] mb-2 cursor-pointer hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            {title} {code && `(${code})`}
          </h3>
          <div className="text-sm text-muted-foreground">
            {time}-{endTime} IST
          </div>
        </div>
      )}

      {!isGeneralSession && (
        <>
          <h4 
            className="text-lg font-semibold text-[#1d56c0] mb-2 cursor-pointer hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            {title} {code && `[${code}]`}
          </h4>
          
          {endTime && (
            <div className="text-sm text-muted-foreground mb-3">
              {time}-{endTime} IST
            </div>
          )}
        </>
      )}

      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
          {category}
        </span>
      </div>

      {description && (
        <div className="mb-4">
          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
          <Button 
            variant="link" 
            className="p-0 h-auto font-normal text-dell-blue"
            onClick={() => setIsModalOpen(true)}
          >
            view more
          </Button>
        </div>
      )}

      {!isGeneralSession && !description && (
        <div className="mb-4">
          <Button 
            variant="link" 
            className="p-0 h-auto font-normal text-dell-blue"
            onClick={() => setIsModalOpen(true)}
          >
            view more
          </Button>
        </div>
      )}

      {speaker && (
        <div className="flex items-center space-x-4 mt-6 p-4 bg-gray-50 rounded-lg">
          {speaker.image && (
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
          <div>
            <h5 className="font-semibold text-foreground">
              {speaker.name}
            </h5>
            <p className="text-sm text-muted-foreground">
              {speaker.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {speaker.company}
            </p>
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