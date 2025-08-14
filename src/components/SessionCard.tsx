import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
  switch (category.toLowerCase()) {
    case 'artificial intelligence':
      return 'bg-purple-100 text-purple-800';
    case 'modern data center & multicoud':
      return 'bg-blue-100 text-blue-800';
    case 'modern workplace & pcs':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
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
  return (
    <Card className="p-6 mb-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-2xl font-semibold text-foreground mb-2">
            {time} IST
          </div>
          {isGeneralSession && (
            <h3 className="text-xl font-bold text-foreground mb-2">
              {title} {code && `(${code})`}
            </h3>
          )}
        </div>
      </div>

      {!isGeneralSession && (
        <>
          <h4 className="text-lg font-semibold text-foreground mb-3">
            {title} {code && `[${code}]`}
          </h4>
          
          {endTime && (
            <div className="text-sm text-muted-foreground mb-3">
              {time}-{endTime}
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
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          <Button variant="link" className="p-0 h-auto font-normal text-dell-blue">
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
    </Card>
  );
};

export default SessionCard;