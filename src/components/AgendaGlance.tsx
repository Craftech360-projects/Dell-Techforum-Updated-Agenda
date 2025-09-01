const AgendaGlance = () => {
  const agendaItems = [
    {
      time: "7:30 AM – 9:00 AM",
      title: "Breakfast / Registrations",
      subtitle: "Solutions Expo Visit"
    },
    {
      time: "9:00 AM – 11:55 AM", 
      title: "General Session",
      subtitle: "Keynotes and presentations"
    },
    {
      time: "11:55 AM – 12:25 PM",
      title: "Solutions Expo Visit",
      subtitle: "Explore the exhibition"
    },
    {
      time: "12:25 PM – 1:30 PM",
      title: "Lunch",
      subtitle: "Networking lunch"
    },
    {
      time: "1:30 PM – 4:30 PM",
      title: "Breakout Sessions",
      subtitle: "Specialized topic sessions"
    },
    {
      time: "4:30 PM – 5:15 PM",
      title: "Solutions Expo Visit",
      subtitle: "Final exploration of AI solutions"
    },
    {
      time: "5:15 PM – 6:00 PM",
      title: "Celebrity Session",
      subtitle: "Special guest appearance"
    },
    {
      time: "6:00 PM",
      title: "Forum Ends",
      subtitle: "Event conclusion"
    }
  ];

  return (
    <section className="bg-[#1d56c0] py-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute right-0 top-0 h-full w-1/3" viewBox="0 0 200 400" fill="none">
          <path
            d="M50 0 Q150 100 100 200 Q50 300 150 400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold text-white mb-">
            AGENDA AT A GLANCE
          </h2>
          <p className="text-white">
            Your day planned at a glance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xs shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-200">
            {agendaItems.map((item, index) => (
              <div key={index} className="flex p-4 hover:bg-gray-50 transition-colors">
                <div className="w-48 flex-shrink-0">
                  <div className="text-sm font-medium text-[#1d56c0]">
                    {item.time}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-medium text-[#1d56c0] mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-[#000000]">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaGlance;