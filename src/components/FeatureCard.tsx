interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function FeatureCard({ icon, title, description, color = "bg-accent text-primary" }: FeatureCardProps) {
  return (
    <div className="group p-5 bg-card border border-card-border rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-200" data-testid={`feature-card-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h4 className="font-semibold text-foreground mb-1 text-sm">{title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  );
}
