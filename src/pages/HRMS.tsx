import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import HRMSSidebar from "@/components/HRMSSidebar";
import {
  LayoutDashboard, Users, UserSquare, FolderKanban, CalendarDays,
  BookOpen, DollarSign, UserPlus, Clock, Settings, Package,
  Receipt, HelpCircle, Rss, Monitor, Mail, FileText
} from "lucide-react";

const features = [
  { icon: <LayoutDashboard className="w-4 h-4" />, title: "Dashboard", description: "Real-time overview of headcount, leave, payroll status, and team activity in one glance." },
  { icon: <Users className="w-4 h-4" />, title: "Users", description: "Manage system users, roles, and permissions. Control who sees what with fine-grained access control." },
  { icon: <UserSquare className="w-4 h-4" />, title: "Employees", description: "Complete employee profiles — personal details, employment history, documents, and performance records." },
  { icon: <FolderKanban className="w-4 h-4" />, title: "Projects", description: "Link employees to projects, track time allocation, and monitor project-level costs." },
  { icon: <CalendarDays className="w-4 h-4" />, title: "Leave Management", description: "Automated leave requests, approval workflows, and accrual tracking. Fully configurable policies." },
  { icon: <BookOpen className="w-4 h-4" />, title: "Registry", description: "Company-wide registry for documents, policies, and compliance records. Always audit-ready." },
  { icon: <DollarSign className="w-4 h-4" />, title: "Payroll", description: "Process payroll with automatic tax calculations, deductions, and direct deposit integrations." },
  { icon: <UserPlus className="w-4 h-4" />, title: "Recruitment", description: "Integrated ATS for managing job postings, applicants, and interview pipelines within HR." },
  { icon: <Clock className="w-4 h-4" />, title: "Time & Attendance", description: "Clock-in/out tracking, overtime calculation, and attendance reporting with shift management." },
  { icon: <Package className="w-4 h-4" />, title: "Inventory", description: "Track company assets assigned to employees — laptops, phones, equipment, and licenses." },
  { icon: <Receipt className="w-4 h-4" />, title: "Expenses", description: "Employee expense submission, multi-level approvals, and reimbursement tracking." },
  { icon: <HelpCircle className="w-4 h-4" />, title: "HelpDesk", description: "Internal IT and HR support tickets. Keep employee queries organized and resolved fast." },
  { icon: <Rss className="w-4 h-4" />, title: "Feeds", description: "Company-wide announcements, team updates, and activity feeds in a familiar social format." },
  { icon: <Monitor className="w-4 h-4" />, title: "Assets", description: "Full asset lifecycle management — procurement, assignment, maintenance, and retirement." },
  { icon: <Mail className="w-4 h-4" />, title: "Mail", description: "Internal mail and notifications. Keep company communication organized in one place." },
  { icon: <FileText className="w-4 h-4" />, title: "Dynamic Pages", description: "Build custom internal pages — org charts, wikis, policies — without involving IT." },
  { icon: <Settings className="w-4 h-4" />, title: "Settings", description: "Configure company structure, approval chains, leave policies, and notification preferences." },
];

export default function HRMS() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" /> HRMS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">HR that actually runs itself</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            VectorEdge HRMS covers every dimension of human resource management — from a new hire's first day to payroll processing — in a clean, unified interface.
          </p>
        </div>

        {/* HRMS Preview */}
        <div className="bg-card border border-card-border rounded-2xl p-6 mb-16 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-foreground text-lg">HRMS Interface Preview</h2>
            <Badge variant="secondary">Live preview</Badge>
          </div>
          <HRMSSidebar />
        </div>

        {/* Features */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">17 modules. One system.</h2>
            <p className="text-muted-foreground text-sm">No more jumping between tools for different HR tasks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} color="bg-purple-50 text-purple-600" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
