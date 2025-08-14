import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  company: string;
}

interface SessionData {
  title: string;
  code: string;
  date: string;
  time: string;
  endTime: string;
  category: string;
  description?: string;
  speakers?: Speaker[];
  agenda?: string[];
}

interface SessionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionData: SessionData;
  isGeneralSession?: boolean;
}

const getCategoryColor = (category: string) => {
  // Using light gray for all categories
  return 'bg-gray-100 text-gray-600';
};

const SessionDetailModal = ({ isOpen, onClose, sessionData, isGeneralSession = false }: SessionDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-black border-b-2 border-orange-400 pb-3 mb-4">
            {sessionData.title} ({sessionData.code})
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-lg font-medium text-black">
            {sessionData.date} {sessionData.time}-{sessionData.endTime} IST
          </div>
          
          {!isGeneralSession && (
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(sessionData.category)}`}>
              {sessionData.category}
            </div>
          )}
          
          {isGeneralSession && sessionData.agenda ? (
            <div className="space-y-3">
              <div className="text-black text-sm leading-relaxed font-semibold">Opening Performance by our Guest Artists</div>
              
              <div className="text-black text-sm leading-relaxed">
                <div className="font-semibold">Welcome & Introduction by Our Host</div>
                <div className="-mt-1">Mandira Bedi, Actor, Fashion Designer, & Television Presenter</div>
              </div>
              
              <div className="text-black text-sm leading-relaxed font-semibold">Welcome Address by our Leadership</div>
              <div className="text-black text-sm leading-relaxed font-semibold">Reimagine What is Possible</div>
              <div className="text-black text-sm leading-relaxed"><span className="font-semibold">Host Speaker:</span> Manish Gupta, President & Managing Director, Dell Technologies India</div>
              <div className="text-black text-sm leading-relaxed font-semibold">Transform Innovation Into Action Session</div>
              <div className="text-black text-sm leading-relaxed font-semibold">Panel Discussion</div>
              <div className="text-black text-sm leading-relaxed font-semibold">Closing Remarks | Transition to AI-First Expo</div>
            </div>
          ) : (
            sessionData.description && (
              <div className="space-y-4">
                <p className="text-black text-sm leading-relaxed">
                  {sessionData.description}
                </p>
              </div>
            )
          )}
          
          {isGeneralSession && sessionData.speakers && sessionData.speakers.length > 0 && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0F4B9C] rounded-full flex-shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-base">{sessionData.speakers[0]?.name}</div>
                    <div className="text-sm text-gray-600 leading-tight">{sessionData.speakers[0]?.title}</div>
                    <div className="text-sm text-gray-600">{sessionData.speakers[0]?.company}</div>
                  </div>
                </div>
                
                {sessionData.speakers[1] && (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#0F4B9C] rounded-full flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-black text-base">{sessionData.speakers[1]?.name}</div>
                      <div className="text-sm text-gray-600 leading-tight">{sessionData.speakers[1]?.title}</div>
                      <div className="text-sm text-gray-600">{sessionData.speakers[1]?.company}</div>
                    </div>
                  </div>
                )}
              </div>
              
              {sessionData.speakers[2] && (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#0F4B9C] rounded-full flex-shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-base">{sessionData.speakers[2]?.name}</div>
                    <div className="text-sm text-gray-600 leading-tight">{sessionData.speakers[2]?.title}</div>
                    <div className="text-sm text-gray-600">{sessionData.speakers[2]?.company}</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SessionDetailModal;