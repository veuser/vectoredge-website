import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-3">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let's talk</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Whether you have a question about our products, pricing, or just want to see a demo — we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-foreground mb-5 text-lg">Contact details</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:hello@vectoredge.io" className="text-sm text-primary hover:underline" data-testid="link-email">hello@vectoredge.io</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+14155550100" className="text-sm text-primary hover:underline" data-testid="link-phone">+1 (415) 555-0100</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Office</p>
                    <p className="text-sm text-muted-foreground">548 Market St, Suite 29500<br />San Francisco, CA 94104</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon–Fri: 9am–6pm PST<br />Response within 2 business hours</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                title="VectorEdge Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085598826537!2d-122.4195!3d37.7851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzA2LjYiTiAxMjLCsDI1JzEwLjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="map-iframe"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-card border border-card-border rounded-2xl p-8">
            <h2 className="font-semibold text-foreground text-lg mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
