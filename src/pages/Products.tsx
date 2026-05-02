import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { BarChart3, Users, Mail, UserPlus } from "lucide-react";

const products = [
  {
    title: "Sales Admin (CRM)",
    description: "A complete customer relationship management platform. Manage your entire sales cycle from first contact to closed deal, with pipeline views, follow-up reminders, and deep analytics.",
    href: "/products/sales-admin",
    icon: <BarChart3 className="w-5 h-5" />,
    badge: "CRM",
    features: ["Leads & Contacts Management", "Deals & Pipeline Kanban", "Follow-ups & Reminders", "Activities Tracking", "Sales Reports & Analytics", "Revenue Forecasting"],
    color: "bg-blue-600",
  },
  {
    title: "HRMS",
    description: "End-to-end human resource management. From employee onboarding and leave tracking to payroll processing and performance reviews — all in one organized platform.",
    href: "/products/hrms",
    icon: <Users className="w-5 h-5" />,
    badge: "HR",
    features: ["Employee & User Management", "Leave & Attendance", "Payroll Processing", "Project Tracking", "Expenses & Inventory", "HelpDesk & Feeds"],
    color: "bg-purple-600",
  },
  {
    title: "Email Support Tool",
    description: "Deliver world-class customer support at any scale. Powered by smart ticket routing, SLA management, and team collaboration features designed for support teams.",
    href: "/products/email-support",
    icon: <Mail className="w-5 h-5" />,
    badge: "Support",
    features: ["Ticket Management", "Email Threading", "SLA Tracking", "Auto-Assignment", "Canned Responses", "Support Analytics"],
    color: "bg-teal-600",
  },
  {
    title: "Recruitment Module",
    description: "Streamline your entire hiring process. Post jobs, track applicants through a visual pipeline, coordinate interviews, and manage offers — all from one workspace.",
    href: "/products/recruitment",
    icon: <UserPlus className="w-5 h-5" />,
    badge: "Hiring",
    features: ["Job Postings Management", "Applicant Tracking (ATS)", "Interview Scheduling", "Offer Management", "Onboarding Workflows", "Hiring Analytics"],
    color: "bg-orange-600",
  },
];

export default function Products() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-3">Our Platform</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Software products. Engineered to work.</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            VectorEdge builds focused software applications — each one purpose-built, deeply functional, and efficient by design. Use them individually or as a connected suite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
