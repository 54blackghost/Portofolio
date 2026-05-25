import { useState } from "react";
import { Send, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/lib/data";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    if (error) {
      toast({ title: "Failed to send message", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
            Have a project in mind? Let's work together.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-10">
          <AnimatedSection className="md:col-span-3" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
              <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
              <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
              <Button type="submit" disabled={sending} className="w-full glow-shadow">
                {sending ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-2 space-y-6" delay={0.2}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="flex gap-3">
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
