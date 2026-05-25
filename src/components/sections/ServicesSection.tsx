import { Globe, Server, Palette, Smartphone, Cloud, MessageSquare } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Server, Palette, Smartphone, Cloud, MessageSquare,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
            What I can do for you and your business.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all hover:shadow-lg h-full">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
