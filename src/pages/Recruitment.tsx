import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import { UserPlus, Briefcase, Calendar, FileCheck, Users, BarChart3, ClipboardList, CheckSquare } from "lucide-react";

const features = [
  { icon: <Briefcase className="w-4 h-4" />, title: "Job Postings", description: "Create and publish job listings across your careers page and job boards with one click." },
  { icon: <ClipboardList className="w-4 h-4" />, title: "Applicant Tracking", description: "Visual ATS pipeline to track every candidate from application to hire. Drag-and-drop stages." },
  { icon: <Calendar className="w-4 h-4" />, title: "Interview Scheduling", description: "Sync with calendars to schedule interviews automatically. Send candidate confirmation emails." },
  { icon: <FileCheck className="w-4 h-4" />, title: "Offer Management", description: "Generate, send, and track offers digitally. E-signature ready and legally compliant." },
  { icon: <Users className="w-4 h-4" />, title: "Onboarding Workflows", description: "Automatically trigger onboarding tasks when a candidate accepts. Smooth day-one experience." },
  { icon: <BarChart3 className="w-4 h-4" />, title: "Hiring Analytics", description: "Time-to-hire, source effectiveness, pipeline conversion rates — real data to improve your hiring." },
  { icon: <CheckSquare className="w-4 h-4" />, title: "Collaborative Reviews", description: "Collect structured interview feedback from all interviewers in one shared scorecard." },
  { icon: <UserPlus className="w-4 h-4" />, title: "Talent Pool", description: "Keep a database of past applicants and passive candidates to revisit for future openings." },
];

const pipeline = [
  { stage: "Applied", count: 48, color: "bg-slate-100 border-slate-300 text-slate-700" },
  { stage: "Screening", count: 22, color: "bg-blue-50 border-blue-300 text-blue-700" },
  { stage: "Interview", count: 11, color: "bg-yellow-50 border-yellow-300 text-yellow-700" },
  { stage: "Offer", count: 4, color: "bg-purple-50 border-purple-300 text-purple-700" },
  { stage: "Hired", count: 2, color: "bg-green-50 border-green-300 text-green-700" },
];

const jobs = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote", applicants: 34, status: "Active" },
  { title: "Product Manager", dept: "Product", location: "NYC / Remote", applicants: 28, status: "Active" },
  { title: "Customer Success Manager", dept: "Support", location: "London", applicants: 19, status: "Active" },
  { title: "Data Analyst", dept: "Analytics", location: "Remote", applicants: 42, status: "Active" },
];

export default function Recruitment() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <UserPlus className="w-4 h-4" /> Recruitment Module
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Hire better people, faster</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From job posting to signed offer letter, VectorEdge Recruitment keeps every candidate, interview, and decision organized in a seamless workflow.
          </p>
        </div>

        {/* Recruitment Preview */}
        <div className="bg-card border border-card-border rounded-2xl shadow-sm mb-16 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Recruitment Dashboard</h2>
            <Badge variant="secondary">Live preview</Badge>
          </div>

          {/* Pipeline Funnel */}
          <div className="px-6 py-5 border-b border-border">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Hiring Pipeline Overview</p>
            <div className="flex items-end gap-3">
              {pipeline.map(({ stage, count, color }) => (
                <div key={stage} className="flex-1 flex flex-col items-center" data-testid={`pipeline-stage-${stage.toLowerCase()}`}>
                  <span className="text-lg font-bold text-foreground mb-1">{count}</span>
                  <div className={`w-full border rounded-t-md ${color} py-2 text-center`}>
                    <span className="text-xs font-medium">{stage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Jobs */}
          <div className="px-6 py-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Active Job Postings</p>
            <div className="space-y-3">
              {jobs.map((job) => (
                <div key={job.title} className="flex items-center justify-between py-2 border-b border-border last:border-0" data-testid={`job-row-${job.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div>
                    <p className="font-medium text-sm text-foreground">{job.title}</p>
                    <p className="text-xs text-muted-foreground">{job.dept} · {job.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">{job.applicants} applicants</span>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-0">{job.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">A complete hiring toolkit</h2>
            <p className="text-muted-foreground text-sm">Everything from sourcing to onboarding in one place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} color="bg-orange-50 text-orange-600" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
