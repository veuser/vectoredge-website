import { Link } from "wouter";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href={`${base}/`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-extrabold text-white tracking-tight">VE</span>
              </div>
              <span className="text-xl font-bold text-white">VectorEdge</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              A software company building efficient, reliable applications for modern businesses. One standard of quality.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="social">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`${base}/products/sales-admin`} className="hover:text-white transition-colors">Sales Admin (CRM)</Link></li>
              <li><Link href={`${base}/products/hrms`} className="hover:text-white transition-colors">HRMS</Link></li>
              <li><Link href={`${base}/products/email-support`} className="hover:text-white transition-colors">Email Support</Link></li>
              <li><Link href={`${base}/products/recruitment`} className="hover:text-white transition-colors">Recruitment</Link></li>
              <li><Link href={`${base}/products`} className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`${base}/about`} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href={`${base}/customers`} className="hover:text-white transition-colors">Customers</Link></li>
              <li><Link href={`${base}/contact`} className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} VectorEdge, Inc. All rights reserved.</p>
          <p className="text-white/50">Software engineered to last.</p>
        </div>
      </div>
    </footer>
  );
}
