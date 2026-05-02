import {
  LayoutDashboard, Users, UserSquare, FolderKanban, CalendarDays,
  BookOpen, DollarSign, UserPlus, Clock, Settings, Package,
  Receipt, HelpCircle, Rss, Monitor, Mail, FileText
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Users" },
  { icon: UserSquare, label: "Employees" },
  { icon: FolderKanban, label: "Projects" },
  { icon: CalendarDays, label: "Leave Management" },
  { icon: BookOpen, label: "Registry" },
  { icon: DollarSign, label: "Payroll" },
  { icon: UserPlus, label: "Recruitment" },
  { icon: Clock, label: "Time & Attendance" },
  { icon: Package, label: "Inventory" },
  { icon: Receipt, label: "Expenses" },
  { icon: HelpCircle, label: "HelpDesk" },
  { icon: Rss, label: "Feeds" },
  { icon: Monitor, label: "Assets" },
  { icon: Mail, label: "Mail" },
  { icon: FileText, label: "Dynamic Pages" },
  { icon: Settings, label: "Settings" },
];

export default function HRMSSidebar() {
  return (
    <div className="flex rounded-xl overflow-hidden border border-border shadow-md bg-card" style={{ height: 480 }}>
      <div className="w-52 bg-sidebar flex-shrink-0 flex flex-col">
        <div className="px-4 py-4 border-b border-sidebar-border">
          <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">Navigation</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {menuItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-xs font-medium transition-colors text-left ${
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              data-testid={`hrms-menu-${label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-5 overflow-y-auto">
        <h3 className="font-semibold text-foreground mb-4 text-sm">Dashboard Overview</h3>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { label: "Total Employees", value: "248", trend: "+12 this month" },
            { label: "On Leave Today", value: "14", trend: "5 pending approval" },
            { label: "Open Positions", value: "7", trend: "3 interviews today" },
            { label: "Payroll Due", value: "Mar 31", trend: "$142,500 total" },
          ].map(({ label, value, trend }) => (
            <div key={label} className="bg-background border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-xl font-bold text-foreground mt-0.5">{value}</p>
              <p className="text-xs text-primary mt-1">{trend}</p>
            </div>
          ))}
        </div>

        <h4 className="font-medium text-foreground text-xs mb-2 uppercase tracking-wider text-muted-foreground">Recent Activity</h4>
        <div className="space-y-2">
          {[
            { msg: "Sarah Johnson submitted leave request", time: "10m ago" },
            { msg: "New hire: Mark Chen (Engineering)", time: "1h ago" },
            { msg: "Q1 payroll processed successfully", time: "2h ago" },
            { msg: "5 timesheets pending approval", time: "3h ago" },
          ].map(({ msg, time }) => (
            <div key={msg} className="flex items-start justify-between gap-2 text-xs">
              <p className="text-foreground/80 leading-tight">{msg}</p>
              <span className="text-muted-foreground whitespace-nowrap">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
