import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { skills as staticSkills, skillCategories } from "@/lib/data";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const { data: dbSkills } = useQuery({
    queryKey: ["public-skills"],
    queryFn: async () => {
      const { data } = await supabase.from("skills").select("*").order("category").order("name");
      return data;
    },
  });

  const skills = (dbSkills && dbSkills.length > 0) ? dbSkills : staticSkills;
  const categories = [...new Set(skills.map((s) => s.category))];
  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
            Technologies and tools I work with on a daily basis.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground glow-shadow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="space-y-5">
          {filtered.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.05}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs font-mono text-primary">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
