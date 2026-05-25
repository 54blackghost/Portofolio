import { useState } from "react";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects as staticProjects, allTechnologies as staticTech } from "@/lib/data";

const ITEMS_PER_PAGE = 4;

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [page, setPage] = useState(1);

  const { data: dbProjects } = useQuery({
    queryKey: ["public-projects"],
    queryFn: async () => {
      const { data } = await supabase.from("projects").select("*").order("display_order");
      return data;
    },
  });

  const projects = (dbProjects && dbProjects.length > 0)
    ? dbProjects.map((p) => ({ ...p, technologies: p.technologies ?? [] }))
    : staticProjects;

  const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.technologies.includes(filter));
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">
            A selection of projects I've built and contributed to.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => { setFilter("All"); setPage(1); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "All" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => { setFilter(tech); setPage(1); }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === tech ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter + page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {paged.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <FolderOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github_link && (
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo_link && (
                    <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={page === i + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
