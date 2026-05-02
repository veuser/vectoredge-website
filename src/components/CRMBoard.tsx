import { Badge } from "@/components/ui/badge";
import { DollarSign, Calendar, User } from "lucide-react";

interface Deal {
  id: string;
  name: string;
  company: string;
  value: string;
  daysAgo: number;
  priority: "high" | "medium" | "low";
}

const columns: { title: string; color: string; bg: string; deals: Deal[] }[] = [
  {
    title: "Lead",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    deals: [
      { id: "1", name: "Acme Corp Expansion", company: "Acme Corp", value: "$12,000", daysAgo: 2, priority: "high" },
      { id: "2", name: "GlobalTech License", company: "GlobalTech", value: "$8,500", daysAgo: 5, priority: "medium" },
      { id: "3", name: "Startup Bundle", company: "LaunchPad Inc", value: "$3,200", daysAgo: 1, priority: "low" },
    ],
  },
  {
    title: "Qualified",
    color: "text-yellow-600",
    bg: "bg-yellow-50 border-yellow-200",
    deals: [
      { id: "4", name: "Enterprise Contract", company: "Nexus Systems", value: "$45,000", daysAgo: 3, priority: "high" },
      { id: "5", name: "Team Plan Upgrade", company: "WorkFlow Co", value: "$9,800", daysAgo: 7, priority: "medium" },
    ],
  },
  {
    title: "Proposal",
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-200",
    deals: [
      { id: "6", name: "Annual Subscription", company: "TechWave", value: "$28,000", daysAgo: 4, priority: "high" },
      { id: "7", name: "SMB Package", company: "QuickBuild", value: "$6,400", daysAgo: 9, priority: "low" },
    ],
  },
  {
    title: "Won / Lost",
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
    deals: [
      { id: "8", name: "Platform Migration", company: "DataCorp", value: "$52,000", daysAgo: 1, priority: "high" },
      { id: "9", name: "Pilot Program", company: "StartupXYZ", value: "$4,100", daysAgo: 6, priority: "medium" },
    ],
  },
];

const priorityColor = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700",
};

export default function CRMBoard() {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-max">
        {columns.map((col) => (
          <div key={col.title} className="w-64 flex-shrink-0">
            <div className={`flex items-center justify-between px-3 py-2 rounded-t-lg border ${col.bg} mb-1`}>
              <span className={`font-semibold text-sm ${col.color}`}>{col.title}</span>
              <Badge variant="secondary" className="text-xs">{col.deals.length}</Badge>
            </div>
            <div className="space-y-2">
              {col.deals.map((deal) => (
                <div key={deal.id} className="bg-white border border-border rounded-lg p-3 shadow-xs hover:shadow-sm transition-shadow cursor-pointer" data-testid={`deal-card-${deal.id}`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-xs text-foreground leading-tight">{deal.name}</p>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${priorityColor[deal.priority]}`}>{deal.priority}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                    <User className="w-3 h-3" /> {deal.company}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary flex items-center gap-0.5">
                      <DollarSign className="w-3 h-3" />{deal.value.replace("$", "")}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{deal.daysAgo}d ago
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
