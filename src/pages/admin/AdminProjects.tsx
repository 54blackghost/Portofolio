import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

type Project = Tables<"projects">;

const emptyProject = { title: "", description: "", technologies: [] as string[], github_link: "", demo_link: "", image_url: "" };

const AdminProjects = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState(emptyProject);
  const [techInput, setTechInput] = useState("");

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const { data, error } = await supabase.from("projects").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (project: typeof form & { id?: string }) => {
      if (project.id) {
        const { error } = await supabase.from("projects").update(project).eq("id", project.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("projects").insert(project);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      setDialogOpen(false);
      setEditing(null);
      setForm(emptyProject);
      toast.success(editing ? "Project updated" : "Project created");
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project deleted");
    },
  });

  const openEdit = (project: Project) => {
    setEditing(project);
    setForm({
      title: project.title,
      description: project.description ?? "",
      technologies: project.technologies ?? [],
      github_link: project.github_link ?? "",
      demo_link: project.demo_link ?? "",
      image_url: project.image_url ?? "",
    });
    setTechInput((project.technologies ?? []).join(", "));
    setDialogOpen(true);
  };

  const openCreate = () => {
    setEditing(null);
    setForm(emptyProject);
    setTechInput("");
    setDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const techs = techInput.split(",").map((t) => t.trim()).filter(Boolean);
    saveMutation.mutate({ ...form, technologies: techs, ...(editing ? { id: editing.id } : {}) });
  };

  const filtered = projects.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}><Plus className="mr-2 h-4 w-4" />Add Project</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? "Edit Project" : "New Project"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Technologies (comma-separated)</Label>
                <Input value={techInput} onChange={(e) => setTechInput(e.target.value)} placeholder="React, Node.js, PostgreSQL" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>GitHub Link</Label>
                  <Input value={form.github_link} onChange={(e) => setForm({ ...form, github_link: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Demo Link</Label>
                  <Input value={form.demo_link} onChange={(e) => setForm({ ...form, demo_link: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Image URL</Label>
                <Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
              </div>
              <Button type="submit" className="w-full" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "Saving..." : editing ? "Update" : "Create"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Technologies</TableHead>
                <TableHead>Links</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">No projects found</TableCell></TableRow>
              ) : filtered.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {(project.technologies ?? []).map((t) => (
                        <span key={t} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{t}</span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 text-xs">
                      {project.github_link && <a href={project.github_link} target="_blank" rel="noreferrer" className="text-primary hover:underline">GitHub</a>}
                      {project.demo_link && <a href={project.demo_link} target="_blank" rel="noreferrer" className="text-primary hover:underline">Demo</a>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(project)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteMutation.mutate(project.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
