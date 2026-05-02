import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  features?: string[];
  color?: string;
}

export default function ProductCard({ title, description, href, icon, badge, features, color = "bg-primary" }: ProductCardProps) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <div className="group bg-card border border-card-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full" data-testid={`product-card-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white`}>
        {icon}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-semibold text-foreground text-lg">{title}</h3>
        {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{description}</p>
      {features && (
        <ul className="space-y-1 mb-5">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <Link href={`${base}${href}`} className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all" data-testid={`link-product-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
