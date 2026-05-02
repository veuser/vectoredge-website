import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import {
  BarChart3, Users, Mail, UserPlus, ArrowRight, CheckCircle,
  TrendingUp, Shield, Zap, Globe, Star, ChevronRight, Play
} from "lucide-react";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const stats = [
  { label: "Active Companies", value: "2,400+" },
  { label: "Users Worldwide", value: "48,000+" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Support Response", value: "< 2hrs" },
];

const products = [
  {
    title: "Sales Admin",
    description: "A powerful CRM that turns your pipeline into revenue. Track leads, manage deals, and forecast with confidence.",
    href: "/products/sales-admin",
    icon: <BarChart3 className="w-5 h-5" />,
    badge: "CRM",
    features: ["Kanban pipeline", "Lead scoring", "Follow-up reminders", "Sales forecasting"],
    color: "bg-blue-600",
  },
  {
    title: "HRMS",
    description: "Complete human resources management — from onboarding to payroll, all in one streamlined platform.",
    href: "/products/hrms",
    icon: <Users className="w-5 h-5" />,
    badge: "HR",
    features: ["Employee records", "Leave management", "Payroll", "Time & attendance"],
    color: "bg-violet-600",
  },
  {
    title: "Email Support",
    description: "Deliver exceptional customer service at scale. Manage tickets, threads, and SLAs without the chaos.",
    href: "/products/email-support",
    icon: <Mail className="w-5 h-5" />,
    badge: "Support",
    features: ["Ticket management", "Email threading", "SLA tracking", "Auto-assignment"],
    color: "bg-teal-600",
  },
  {
    title: "Recruitment",
    description: "Build your team faster. Track applicants, schedule interviews, and manage offers in one smooth workflow.",
    href: "/products/recruitment",
    icon: <UserPlus className="w-5 h-5" />,
    badge: "Hiring",
    features: ["Job postings", "ATS pipeline", "Interview scheduling", "Offer management"],
    color: "bg-orange-500",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Sales",
    company: "TechWave Solutions",
    quote: "VectorEdge's CRM transformed our pipeline visibility. We closed 30% more deals in Q3 alone.",
    rating: 5,
    avatar: "SC",
    avatarColor: "bg-blue-500",
  },
  {
    name: "Marcus Obi",
    role: "HR Director",
    company: "GlobalBridge Corp",
    quote: "Managing 300+ employees used to be a nightmare. With HRMS, everything talks to each other automatically.",
    rating: 5,
    avatar: "MO",
    avatarColor: "bg-violet-500",
  },
  {
    name: "Priya Nair",
    role: "Head of Support",
    company: "Linktree",
    quote: "Our first-response time dropped from 8 hours to under 90 minutes after switching. Game-changer.",
    rating: 5,
    avatar: "PN",
    avatarColor: "bg-teal-500",
  },
];

const whyPoints = [
  { icon: <Zap className="w-5 h-5" />, title: "Engineered for efficiency", desc: "VectorEdge software is designed to eliminate friction. Every feature is purposeful — nothing is there just to fill a checklist.", color: "bg-yellow-100 text-yellow-600" },
  { icon: <Shield className="w-5 h-5" />, title: "Enterprise-grade security", desc: "SOC 2 Type II certified. All applications are built with security-first principles from the ground up.", color: "bg-green-100 text-green-600" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Software that scales", desc: "Our applications are built to grow with you — from a 10-person startup to a 10,000-employee enterprise.", color: "bg-blue-100 text-blue-600" },
  { icon: <Globe className="w-5 h-5" />, title: "Always available", desc: "Hosted across 6 global regions with a 99.9% uptime SLA. Your software runs wherever your team is.", color: "bg-purple-100 text-purple-600" },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-50 to-purple-100 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-50 to-violet-100 opacity-50 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-8" data-testid="badge-hero">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              Software built to work the way you do
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]" data-testid="hero-heading">
              Powerful software.
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Purposeful products. One company.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              VectorEdge is a software company that builds efficient, reliable applications for modern businesses. From sales and HR to customer support and hiring — we engineer software that teams actually love to use.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow" data-testid="btn-hero-start">
                Start free trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-gray-200 text-gray-700 hover:bg-gray-50 gap-2" data-testid="btn-hero-demo">
                <Play className="w-4 h-4 fill-current" /> Watch demo
              </Button>
            </div>

            {/* Hero dashboard mockup */}
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/80 overflow-hidden bg-gray-50">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-400 text-left">
                    app.novasuite.io/dashboard
                  </div>
                </div>
                {/* Fake dashboard content */}
                <div className="p-5 grid grid-cols-4 gap-4">
                  {[
                    { label: "Deals Closed", value: "126", trend: "+18.2%", up: true },
                    { label: "Active Deals", value: "247", trend: "+5.1%", up: true },
                    { label: "Support Tickets", value: "34", trend: "-12%", up: false },
                    { label: "Open Positions", value: "7", trend: "+2", up: true },
                  ].map(({ label, value, trend, up }) => (
                    <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                      <p className="text-xs text-gray-400 mb-1">{label}</p>
                      <p className="text-2xl font-bold text-gray-900">{value}</p>
                      <p className={`text-xs mt-1 font-medium ${up ? "text-emerald-600" : "text-red-500"}`}>{trend} this month</p>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5 grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-gray-700">Sales Pipeline</p>
                      <Badge variant="secondary" className="text-xs">Q2 2025</Badge>
                    </div>
                    <div className="flex gap-2 items-end h-20">
                      {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-400 opacity-80" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Team Status</p>
                    <div className="space-y-2">
                      {[{ name: "Sales", pct: 78, color: "bg-blue-500" }, { name: "Support", pct: 92, color: "bg-teal-500" }, { name: "HR", pct: 64, color: "bg-violet-500" }].map(({ name, pct, color }) => (
                        <div key={name}>
                          <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                            <span>{name}</span><span>{pct}%</span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -left-6 top-1/3 bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-3 hidden lg:flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Deals closed</p>
                  <p className="text-sm font-bold text-gray-900">+30% MoM</p>
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/3 bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-3 hidden lg:flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">New hires</p>
                  <p className="text-sm font-bold text-gray-900">12 this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center px-4" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                <p className="text-3xl font-extrabold text-gray-900 tracking-tight">{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700 border-blue-100">Our Products</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything your team needs</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Four integrated products covering the full lifecycle of your business. Buy together or individually.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${base}/products`}>
              <Button variant="outline" size="lg" className="border-gray-200 text-gray-700 hover:bg-gray-50" data-testid="btn-all-products">
                Compare all products <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why VectorEdge */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-violet-50 text-violet-700 border-violet-100">Why VectorEdge</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Software built with craftsmanship
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                At VectorEdge, software quality isn't a talking point — it's the standard. Our engineering team builds every product with clean architecture, performance at the core, and an interface that gets out of your team's way.
              </p>
              <ul className="space-y-3">
                {["Single sign-on across all modules", "Shared contacts and company records", "Unified reporting and analytics", "Role-based access control", "API-first architecture"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyPoints.map(({ icon, title, desc, color }) => (
                <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}>
                    {icon}
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-100">Customer Stories</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Teams that switched, stayed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, company, quote, rating, avatar, avatarColor }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${avatarColor} text-white flex items-center justify-center font-semibold text-sm`}>
                    {avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{name}</p>
                    <p className="text-xs text-gray-400">{role} · {company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={`${base}/customers`}>
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50" data-testid="btn-all-customers">
                See all customer stories <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 mx-4 sm:mx-8 lg:mx-16 mb-16 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to simplify how you work?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Start your 14-day free trial. No credit card required. Setup in minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 bg-white text-blue-700 hover:bg-blue-50 shadow-lg font-semibold" data-testid="btn-cta-trial">
              Start free trial
            </Button>
            <Link href={`${base}/contact`}>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent" data-testid="btn-cta-demo">
                Talk to sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
