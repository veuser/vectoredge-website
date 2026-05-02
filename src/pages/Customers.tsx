import { Badge } from "@/components/ui/badge";
import { Star, Building2 } from "lucide-react";

const companyLogos = [
  "TechWave", "GlobalBridge", "Nexus Systems", "DataCorp",
  "WorkFlow Co", "LaunchPad", "QuickBuild", "StartupXYZ",
  "Acme Corp", "Linktree", "BrightPath", "SkyVentures",
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Sales",
    company: "TechWave Solutions",
    quote: "VectorEdge's CRM transformed how we manage our pipeline. We went from messy spreadsheets to real-time visibility in under a week. Our close rate increased 30% in Q3.",
    rating: 5,
  },
  {
    name: "Marcus Obi",
    role: "HR Director",
    company: "GlobalBridge Corp",
    quote: "Managing 300+ employees across 3 offices was a nightmare before VectorEdge. Now payroll, leave, and attendance all talk to each other. I save 6 hours every week.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Head of Support",
    company: "Linktree",
    quote: "Our first-response time dropped from 8 hours to under 90 minutes after switching. The SLA tracking alone is worth every penny. Customers have noticed.",
    rating: 5,
  },
  {
    name: "James Alderton",
    role: "CEO",
    company: "QuickBuild",
    quote: "We use every VectorEdge product. Having them integrated means sales can see support tickets, HR can see project allocation, and everyone works from the same data.",
    rating: 5,
  },
  {
    name: "Ana Martinez",
    role: "Talent Acquisition Lead",
    company: "Nexus Systems",
    quote: "Our time-to-hire dropped from 45 days to 28 days. The recruitment pipeline is beautifully designed and keeps the whole hiring team aligned without constant meetings.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    company: "DataCorp",
    quote: "The pricing is straightforward, the support is responsive, and the platform actually does what it promises. In SaaS, that's rare. VectorEdge is the real deal.",
    rating: 5,
  },
];

const caseStudies = [
  { company: "TechWave Solutions", industry: "Software", result: "+30% close rate", product: "Sales Admin" },
  { company: "GlobalBridge Corp", industry: "Professional Services", result: "6hrs/week saved", product: "HRMS" },
  { company: "Linktree", industry: "Tech", result: "-82% response time", product: "Email Support" },
  { company: "Nexus Systems", industry: "Manufacturing", result: "37% faster hiring", product: "Recruitment" },
];

export default function Customers() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-3">Trusted Worldwide</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">2,400+</span> companies
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            From fast-growing startups to established enterprises — teams everywhere rely on VectorEdge to run their daily operations.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="bg-muted/40 border border-border rounded-2xl p-8 mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">Companies using VectorEdge</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {companyLogos.map((name) => (
              <div key={name} className="bg-card border border-card-border rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:shadow-sm transition-shadow" data-testid={`logo-${name.toLowerCase().replace(/\s+/g, "-")}`}>
                <Building2 className="w-6 h-6 text-muted-foreground" />
                <span className="text-xs font-medium text-foreground text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Highlights */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Real results, real customers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map(({ company, industry, result, product }) => (
              <div key={company} className="bg-card border border-card-border rounded-xl p-5 text-center" data-testid={`case-${company.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="text-3xl font-extrabold text-primary mb-1">{result}</p>
                <p className="font-semibold text-sm text-foreground">{company}</p>
                <p className="text-xs text-muted-foreground">{industry}</p>
                <Badge variant="outline" className="mt-3 text-xs">{product}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">What our customers say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, company, quote, rating }) => (
              <div key={name} className="bg-card border border-card-border rounded-xl p-6 flex flex-col" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed italic flex-1 mb-5">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{role} · {company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
