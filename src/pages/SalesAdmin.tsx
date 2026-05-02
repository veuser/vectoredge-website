import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import CRMBoard from "@/components/CRMBoard";
import {
  BarChart3, Users, TrendingUp, Bell, BookUser, Activity, PieChart
} from "lucide-react";

const features = [
  { icon: <Users className="w-4 h-4" />, title: "Leads Management", description: "Capture and qualify leads from any channel. Score them automatically and route to the right rep instantly." },
  { icon: <TrendingUp className="w-4 h-4" />, title: "Deals Management", description: "Track every deal through your pipeline with full history, notes, and activity logs attached." },
  { icon: <BarChart3 className="w-4 h-4" />, title: "Sales Pipelines", description: "Visualize your entire sales funnel with a Kanban-style board. Drag, drop, and close deals faster." },
  { icon: <Bell className="w-4 h-4" />, title: "Follow-ups & Reminders", description: "Never miss a follow-up. Set automated reminders and get notified before a deal goes cold." },
  { icon: <BookUser className="w-4 h-4" />, title: "Contacts Management", description: "Unified contact records with full communication history, linked deals, and activity timelines." },
  { icon: <Activity className="w-4 h-4" />, title: "Activities Tracking", description: "Log calls, emails, meetings, and notes. Get a complete picture of engagement at a glance." },
  { icon: <PieChart className="w-4 h-4" />, title: "Reports & Analytics", description: "Custom dashboards, win/loss analysis, and revenue forecasting. Know your numbers at all times." },
];

const summaryWidgets = [
  { label: "Total Leads", value: "1,284", change: "+18%", up: true },
  { label: "Open Deals", value: "247", change: "+5%", up: true },
  { label: "Pipeline Value", value: "$842K", change: "+23%", up: true },
  { label: "Won This Month", value: "$124K", change: "-3%", up: false },
];

export default function SalesAdmin() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" /> Sales Admin CRM
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Your pipeline, finally under control</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From first contact to closed deal, Sales Admin gives your team everything they need to move faster and close more. No spreadsheets, no missed follow-ups.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-card border border-card-border rounded-2xl p-6 mb-16 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-foreground text-lg">CRM Dashboard</h2>
            <Badge variant="secondary">Live preview</Badge>
          </div>

          {/* Summary Widgets */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {summaryWidgets.map(({ label, value, change, up }) => (
              <div key={label} className="bg-background border border-border rounded-xl p-4" data-testid={`widget-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className={`text-xs mt-1 font-medium ${up ? "text-green-600" : "text-red-500"}`}>
                  {change} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Pipeline Kanban */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Sales Pipeline</h3>
            <CRMBoard />
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Every tool your sales team needs</h2>
            <p className="text-muted-foreground text-sm">Built to reduce friction, not add it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} color="bg-blue-50 text-blue-600" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
