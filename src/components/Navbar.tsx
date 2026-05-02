import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { name: "Sales Admin (CRM)", href: "/products/sales-admin" },
  { name: "HRMS", href: "/products/hrms" },
  { name: "Email Support", href: "/products/email-support" },
  { name: "Recruitment", href: "/products/recruitment" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const navLink = (href: string) => `${base}${href}`;
  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={navLink("/")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-xs font-extrabold text-white tracking-tight">VE</span>
            </div>
            <span className="text-xl font-bold text-foreground">VectorEdge</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href={navLink("/")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary bg-accent" : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
              data-testid="nav-home"
            >
              Home
            </Link>

            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.startsWith("/products") ? "text-primary bg-accent" : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
                data-testid="nav-products"
              >
                Products <ChevronDown className={`w-3 h-3 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border rounded-lg shadow-lg py-1 z-50">
                  <Link href={navLink("/products")} className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors font-medium border-b border-border mb-1">
                    All Products
                  </Link>
                  {products.map((p) => (
                    <Link key={p.href} href={navLink(p.href)} className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors">
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={navLink("/customers")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/customers") ? "text-primary bg-accent" : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
              data-testid="nav-customers"
            >
              Customers
            </Link>
            <Link
              href={navLink("/about")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about") ? "text-primary bg-accent" : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
              data-testid="nav-about"
            >
              About
            </Link>
            <Link
              href={navLink("/contact")}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-primary bg-accent" : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" data-testid="btn-signin">Sign In</Button>
            <Button size="sm" data-testid="btn-getstarted">Get Started</Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="btn-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-3 space-y-1">
          <Link href={navLink("/")} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href={navLink("/products")} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted" onClick={() => setMobileOpen(false)}>Products</Link>
          {products.map((p) => (
            <Link key={p.href} href={navLink(p.href)} className="block px-6 py-2 rounded-md text-sm text-foreground/70 hover:bg-muted" onClick={() => setMobileOpen(false)}>{p.name}</Link>
          ))}
          <Link href={navLink("/customers")} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted" onClick={() => setMobileOpen(false)}>Customers</Link>
          <Link href={navLink("/about")} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href={navLink("/contact")} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="pt-2 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
            <Button size="sm" className="flex-1">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
