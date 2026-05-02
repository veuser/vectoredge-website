import { Badge } from "@/components/ui/badge";
import { Star, Building2 } from "lucide-react";

const companyLogos = [
  "Infoquest" ];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Sales",
    company: "Infoquest",
    quote: "VectorEdge's CRM transformed how we manage our pipeline. We went from messy spreadsheets to real-time visibility in under a week. Our close rate increased 30% in Q3.",
    rating: 5,
  },
];

const caseStudies = [
  { company: "Infoquest", industry: "Software", result: "+30% close rate", product: "Sales Admin" }];

export default function Customers() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-3">Trusted Worldwide</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">2+</span> companies
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
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
}
