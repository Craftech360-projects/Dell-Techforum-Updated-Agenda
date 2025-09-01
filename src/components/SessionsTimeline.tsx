import SessionCard from "./SessionCard";
import sessionsData from "../data/sessions.json";

const SessionsTimeline = () => {
  // Group sessions by time slot
  const groupSessionsByTime = () => {
    const grouped: { [key: string]: typeof sessionsData.sessions } = {};
    
    sessionsData.sessions.forEach(session => {
      const timeKey = `${session.startTime}-${session.endTime}`;
      if (!grouped[timeKey]) {
        grouped[timeKey] = [];
      }
      grouped[timeKey].push(session);
    });
    
    return grouped;
  };

  const groupedSessions = groupSessionsByTime();
  const sortedTimeSlots = Object.keys(groupedSessions).sort();

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            3 September 2025
          </h2>
        </div>

        {sortedTimeSlots.map((timeSlot, index) => {
          const sessions = groupedSessions[timeSlot];
          const isGeneralSession = sessions.some(s => s.isGeneralSession);
          const isSpecialSession = sessions.some(s => s.isSpecialSession);
          
          if (isGeneralSession) {
            // Render General Session separately (full width)
            const generalSession = sessions.find(s => s.isGeneralSession);
            if (!generalSession) return null;
            
            return (
              <div key={timeSlot} className="mb-6">
                <div className="flex gap-8">
                  <div className="w-32 flex-shrink-0 pt-2">
                    <div className="text-xl font-semibold text-gray-700">
                      {generalSession.startTime}
                    </div>
                    <div className="text-sm text-gray-500">
                      IST
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <SessionCard
                      time={generalSession.startTime}
                      endTime={generalSession.endTime}
                      title={generalSession.title}
                      code={generalSession.code}
                      category={generalSession.category}
                      description={generalSession.description}
                      speaker={generalSession.speakers?.[0]}
                      isGeneralSession={true}
                    />
                  </div>
                </div>
              </div>
            );
          }

          if (isSpecialSession) {
            // Render Special Session separately (full width)
            const specialSession = sessions.find(s => s.isSpecialSession);
            if (!specialSession) return null;
            
            return (
              <div key={timeSlot} className="mb-6">
                <div className="flex gap-8">
                  <div className="w-32 flex-shrink-0 pt-2">
                    <div className="text-xl font-semibold text-gray-700">
                      {specialSession.startTime}
                    </div>
                    <div className="text-sm text-gray-500">
                      IST
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <SessionCard
                      time={specialSession.startTime}
                      endTime={specialSession.endTime}
                      title={specialSession.title}
                      code={specialSession.code}
                      category={specialSession.category}
                      description={specialSession.description}
                      speaker={specialSession.speakers?.[0]}
                      isSpecialSession={true}
                    />
                  </div>
                </div>
              </div>
            );
          }
          
          // Render regular sessions in grid with time on the left
          return (
            <div key={timeSlot} className="mb-6">
              {index > 0 && <hr className="border-gray-200 mb-6" />}
              <div className="flex gap-8">
                <div className="w-32 flex-shrink-0 pt-2">
                  <div className="text-xl font-semibold text-gray-700">
                    {timeSlot.split('-')[0]}
                  </div>
                  <div className="text-sm text-gray-500">
                    IST
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-4">
                    {sessions.map(session => (
                      <SessionCard
                        key={session.id}
                        time={session.startTime}
                        endTime={session.endTime}
                        title={session.title}
                        code={session.code}
                        category={session.category}
                        description={session.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SessionsTimeline;