import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const CONTACT_EMAIL = "hello@vectoredge.io";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const charCount = form.watch("message").length;

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    setErrorMsg("");

    try {
      const subject = encodeURIComponent(`Contact Form: Message from ${values.name}`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}${values.phone ? `\nPhone: ${values.phone}` : ""}\n\nMessage:\n${values.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Could not open your email client. Please email us directly at " + CONTACT_EMAIL);
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center" data-testid="contact-success">
        <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">Email Client Opened!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Your message has been prepared in your email client. Send it to reach our team.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Jane Smith" data-testid="input-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@company.com" data-testid="input-email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number <span className="text-muted-foreground text-xs">(optional)</span></FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1 (555) 000-0000" data-testid="input-phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                <span className={`text-xs tabular-nums ${charCount > 900 ? "text-destructive" : "text-muted-foreground"}`}>
                  {charCount}/1000
                </span>
              </div>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project or question..."
                  rows={5}
                  data-testid="input-message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {status === "error" && (
          <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3" role="alert">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={status === "loading"}
          data-testid="btn-submit-contact"
        >
          {status === "loading" ? (
            <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Opening email…</>
          ) : (
            "Send Message"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Fields marked <span className="text-destructive">*</span> are required. Clicking Send will open your email client.
        </p>
      </form>
    </Form>
  );
}
