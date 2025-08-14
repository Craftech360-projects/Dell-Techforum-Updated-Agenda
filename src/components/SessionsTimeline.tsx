import SessionCard from "./SessionCard";

const SessionsTimeline = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            3 September 2025
          </h2>
        </div>

        <SessionCard
          time="09:00"
          title="General Session"
          code="GEN01-P"
          category="General Session"
          endTime="11:55"
          description="Opening Performance by our Guest Artists, Welcome & Introduction by Our Host Mandira Bedi (Actor, Fashion Designer, & Television Presenter), Welcome Address by our Leadership, Reimagine What is Possible, Transform Innovation Into Action Session, Panel Discussion, Closing Remarks | Transition to AI-First Expo"
          speaker={{
            name: "Mandira Bedi",
            title: "Actor, Fashion Designer, & Television Presenter",
            company: "Host"
          }}
          isGeneralSession
        />

        <div className="grid gap-6 md:grid-cols-2">
          <SessionCard
            time="13:30"
            endTime="14:00"
            title="Dell AI Factory: What It is and Why It Matters"
            code="AI01-P"
            category="Artificial Intelligence"
          />

          <SessionCard
            time="13:30"
            endTime="14:00"
            title="Advancing AI with AMD and Dell"
            code="MDC10-P"
            category="Modern Data Center & Multicoud"
          />

          <SessionCard
            time="13:30"
            endTime="14:00"
            title="Simplifying Enterprise AI - Inferencing with API Endpoint and Dell PowerEdge on Intel Xeon and Gaudi"
            code="MDC09-P"
            category="Modern Data Center & Multicoud"
          />

          <SessionCard
            time="13:30"
            endTime="14:00"
            title="Thriving in the Modern Data Center with AI and Multicloud"
            code="MDC01-P"
            category="Modern Data Center & Multicoud"
          />

          <SessionCard
            time="14:00"
            endTime="14:30"
            title="Building the NVIDIA Enterprise AI Factory: A scalable blueprint for IT excellence"
            code="AI05-P"
            category="Artificial Intelligence"
          />

          <SessionCard
            time="14:00"
            endTime="14:30"
            title="Dell and Microsoft AI-Enabled Solutions from Device to Cloud"
            code="MDC08-P"
            category="Modern Data Center & Multicoud"
          />

          <SessionCard
            time="14:00"
            endTime="14:30"
            title="Dell Pro AI PCs, silicon innovation, and the future of work: Why refresh with Dell Technologies?"
            code="MW01-P"
            category="Modern Workplace & PCs"
          />

          <SessionCard
            time="14:00"
            endTime="14:30"
            title="Revolutionizing AI development with Dell Pro Max and Dell Pro AI Studio"
            code="MW02-P"
            category="Modern Workplace & PCs"
          />

          <SessionCard
            time="15:00"
            endTime="15:30"
            title="Enhance developer productivity with Dell AI Code Assistant"
            code="AI02-P"
            category="Artificial Intelligence"
          />

          <SessionCard
            time="16:00"
            endTime="16:30"
            title="From raw to real: Transform data into insights with the Dell AI Data Platform"
            code="AI04-P"
            category="Artificial Intelligence"
            description="As GPU-accelerated computing pushes the boundaries of performance, organisations need a data platform built to keep up. The Dell AI Data Platform — powered by the Dell Data Lakehouse, Dell PowerScale, and Dell ObjectScale — is purpose-built to place, process, and protect your data from edge to core to cloud, while delivering the speed and scale required for AI."
          />
        </div>
      </div>
    </section>
  );
};

export default SessionsTimeline;