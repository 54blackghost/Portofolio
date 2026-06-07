import { AnimatedSection } from "@/components/AnimatedSection";
import { personalInfo, experiences, education } from "@/lib/data";
import { Briefcase, ExternalLink, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            {personalInfo.bio}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
              {experiences.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                    <span className="text-xs font-mono text-primary">{exp.year}</span>
                    <h4 className="text-base font-semibold mt-1">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">{exp.description}</p><br />
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      <a href={exp.demo_link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="p-6 rounded-xl border border-border bg-card">
                  <span className="text-xs font-mono text-primary">{edu.year}</span>
                  <h4 className="text-base font-semibold mt-1">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
