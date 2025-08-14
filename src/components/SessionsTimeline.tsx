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
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            3 September 2025
          </h2>
        </div>

        {sortedTimeSlots.map((timeSlot, index) => {
          const sessions = groupedSessions[timeSlot];
          const isGeneralSession = sessions.some(s => s.isGeneralSession);
          
          if (isGeneralSession) {
            // Render General Session separately (full width)
            const generalSession = sessions.find(s => s.isGeneralSession);
            if (!generalSession) return null;
            
            return (
              <div key={timeSlot} className="mb-8">
                <div className="flex gap-8">
                  <div className="w-32 flex-shrink-0 pt-2">
                    <div className="text-xl font-semibold text-gray-700">
                      {generalSession.startTime}
                    </div>
                    <div className="text-sm text-gray-500">
                      IST
                    </div>
                  </div>
                  <div className="flex-1">
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
          
          // Render regular sessions in grid with time on the left
          return (
            <div key={timeSlot} className="mb-8">
              {index > 0 && <hr className="border-gray-200 mb-8" />}
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
                  <div className="grid gap-6 md:grid-cols-2">
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