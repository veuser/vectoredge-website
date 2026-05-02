import { Badge } from "@/components/ui/badge";
import { Target, Heart, Zap, Globe } from "lucide-react";

const team = [
  { name: "Elena Vasquez", role: "Co-founder & CEO", bio: "15 years of enterprise software experience. Founded VectorEdge to prove that business software can be both powerful and beautifully engineered." },
  { name: "James Wu", role: "Co-founder & CTO", bio: "Former engineering lead at HubSpot. Architected VectorEdge's core platform and drives the technical direction across every product." },
  { name: "Amara Diallo", role: "Head of Design", bio: "Ex-design lead at Figma. Champions the belief that efficient software must also be a pleasure to interact with." },
  { name: "Ravi Patel", role: "VP of Engineering", bio: "15+ years building distributed systems. Leads the engineering teams responsible for VectorEdge's performance and reliability." },
  { name: "Sophie Laurent", role: "VP of Customer Success", bio: "Ensures every VectorEdge customer gets maximum value from the software they invest in. Obsessive about outcomes over tickets." },
  { name: "Omar Sheikh", role: "Head of Sales", bio: "Helps businesses understand which VectorEdge products fit their needs. No pressure, just honest conversations about software fit." },
];

const values = [
  { icon: <Target className="w-5 h-5" />, title: "Purposeful software", desc: "We build applications that do exactly what they promise. No unnecessary features, no hidden complexity — just focused, efficient software." },
  { icon: <Heart className="w-5 h-5" />, title: "Outcomes over outputs", desc: "We measure success by the value our software delivers to customers, not by the number of features we ship." },
  { icon: <Zap className="w-5 h-5" />, title: "Engineering excellence", desc: "Every line of code matters. We hold ourselves to high standards of performance, reliability, and maintainability across every product we ship." },
  { icon: <Globe className="w-5 h-5" />, title: "Built for everyone", desc: "VectorEdge applications are designed for teams worldwide — accessible, intuitive, and built to work across any organisation size." },
];

const milestones = [
  { year: "2022", event: "VectorEdge founded — first engineering team assembled" },
  { year: "2022", event: "Sales Admin (CRM) v1.0 shipped to first 2 business customers" },
  { year: "2022", event: "HRMS launched — 2 companies onboarded, Series A funding closed" },
  { year: "2023", event: "Email Support Tool released — recognised for software quality and UX" },
  { year: "2023", event: "Recruitment Module launched — 5 customers across the full product suite" },
  { year: "2024", event: "5+ companies. Global infrastructure. Continuous delivery at scale." },
];

export default function About() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-3">Our Story</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">A software company built on craftsmanship</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            VectorEdge was founded with a single conviction: businesses deserve software that is genuinely efficient, well-engineered, and built to last. We develop focused applications that solve real operational problems — and we do it with the rigor of a team that cares deeply about the quality of what we ship.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-foreground text-white rounded-2xl p-10 mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">Our Mission</p>
          <p className="text-2xl sm:text-3xl font-bold leading-tight max-w-2xl mx-auto">
            "To build software applications that are efficient, purposeful, and powerful enough for every business that depends on them."
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Five years of building</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-6">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} data-testid={`milestone-${year}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div className="bg-card border border-card-border rounded-xl p-4">
                      <p className="font-semibold text-primary text-sm mb-1">{year}</p>
                      <p className="text-foreground text-sm">{event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">What we believe</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-card border border-card-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        {/* <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">The team behind VectorEdge</h2>
            <p className="text-muted-foreground text-sm">Engineers, designers, and builders who believe software should be a competitive advantage for every business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="bg-card border border-card-border rounded-xl p-6 flex gap-4" data-testid={`team-member-${name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{name}</p>
                  <p className="text-xs text-primary mb-2">{role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
