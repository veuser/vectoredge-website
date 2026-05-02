import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import { Mail, Ticket, Users, Clock, MessageSquare, BarChart3, Zap, Reply } from "lucide-react";

const features = [
  { icon: <Ticket className="w-4 h-4" />, title: "Ticket Management", description: "Every customer email becomes a trackable ticket with status, priority, and ownership. Nothing falls through the cracks." },
  { icon: <Mail className="w-4 h-4" />, title: "Email Threading", description: "All replies stay linked in a single thread. No more hunting through inboxes to find context." },
  { icon: <Users className="w-4 h-4" />, title: "Auto-Assignment", description: "Route tickets to the right agent automatically based on rules, skills, and workload balancing." },
  { icon: <Clock className="w-4 h-4" />, title: "SLA Tracking", description: "Set response and resolution targets. Get alerts before SLAs breach. Report on compliance automatically." },
  { icon: <MessageSquare className="w-4 h-4" />, title: "Canned Responses", description: "Build a library of approved responses. Agents reply faster and stay on-brand, every time." },
  { icon: <BarChart3 className="w-4 h-4" />, title: "Support Analytics", description: "CSAT scores, first-response time, resolution rate, and agent performance — in real-time dashboards." },
  { icon: <Zap className="w-4 h-4" />, title: "Automation Rules", description: "Trigger actions based on conditions — escalate unresponded tickets, tag by keyword, close stale threads." },
  { icon: <Reply className="w-4 h-4" />, title: "Collaboration", description: "Leave internal notes, @mention teammates, and share tickets without the customer seeing it." },
];

const tickets = [
  { id: "#4821", subject: "Unable to export CSV reports", from: "alex@acmecorp.com", status: "Open", priority: "High", age: "2h" },
  { id: "#4820", subject: "Billing question - invoice discrepancy", from: "finance@techwave.io", status: "Pending", priority: "Medium", age: "4h" },
  { id: "#4818", subject: "Integration with Slack not working", from: "ops@startupxyz.com", status: "Open", priority: "High", age: "6h" },
  { id: "#4815", subject: "How to add new team members?", from: "hr@globalbridge.com", status: "Resolved", priority: "Low", age: "1d" },
  { id: "#4812", subject: "Dashboard loads very slowly", from: "dev@nexussystems.co", status: "Open", priority: "High", age: "1d" },
];

const statusColor: Record<string, string> = {
  Open: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Resolved: "bg-green-100 text-green-700",
};

const priorityColor: Record<string, string> = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

export default function EmailSupport() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" /> Email Support Tool
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Support at scale, without the chaos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Transform your customer email inbox into a structured, trackable support operation. Your team handles more, faster — and customers notice the difference.
          </p>
        </div>

        {/* Inbox Preview */}
        <div className="bg-card border border-card-border rounded-2xl shadow-sm mb-16 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <h2 className="font-semibold text-foreground">Support Inbox</h2>
              <Badge className="bg-red-100 text-red-700 border-0">3 unread</Badge>
            </div>
            <Badge variant="secondary">Live preview</Badge>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Ticket</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Subject</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">From</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Priority</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tickets.map((t) => (
                  <tr key={t.id} className="hover:bg-muted/30 transition-colors cursor-pointer" data-testid={`ticket-row-${t.id}`}>
                    <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{t.id}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{t.subject}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{t.from}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[t.status]}`}>{t.status}</span>
                    </td>
                    <td className={`px-6 py-4 text-xs font-semibold hidden sm:table-cell ${priorityColor[t.priority]}`}>{t.priority}</td>
                    <td className="px-6 py-4 text-xs text-muted-foreground hidden lg:table-cell">{t.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Everything great support needs</h2>
            <p className="text-muted-foreground text-sm">Purpose-built for teams that care about customer experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} color="bg-teal-50 text-teal-600" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
