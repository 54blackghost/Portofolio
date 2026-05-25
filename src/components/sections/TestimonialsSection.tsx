import { Quote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { testimonials as staticTestimonials } from "@/lib/data";

export function TestimonialsSection() {
  const { data: dbTestimonials } = useQuery({
    queryKey: ["public-testimonials"],
    queryFn: async () => {
      const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
      return data;
    },
  });

  const testimonials = (dbTestimonials && dbTestimonials.length > 0) ? dbTestimonials : staticTestimonials;

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
            What my clients say about working with me.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-border bg-card h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground flex-1 italic">"{t.message}"</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
