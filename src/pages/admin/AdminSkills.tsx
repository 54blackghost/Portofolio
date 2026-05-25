import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

type Skill = Tables<"skills">;
const categories = ["Frontend", "Backend", "DevOps", "Tools"];
const emptySkill = { name: "", category: "Frontend", level: 50 };

const AdminSkills = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Skill | null>(null);
  const [form, setForm] = useState(emptySkill);

  const { data: skills = [], isLoading } = useQuery({
    queryKey: ["admin-skills"],
    queryFn: async () => {
      const { data, error } = await supabase.from("skills").select("*").order("category").order("name");
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (skill: typeof form & { id?: string }) => {
      if (skill.id) {
        const { error } = await supabase.from("skills").update(skill).eq("id", skill.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("skills").insert(skill);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-skills"] });
      setDialogOpen(false);
      setEditing(null);
      setForm(emptySkill);
      toast.success(editing ? "Skill updated" : "Skill added");
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("skills").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-skills"] });
      toast.success("Skill deleted");
    },
  });

  const openEdit = (skill: Skill) => {
    setEditing(skill);
    setForm({ name: skill.name, category: skill.category, level: skill.level });
    setDialogOpen(true);
  };

  const openCreate = () => {
    setEditing(null);
    setForm(emptySkill);
    setDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate({ ...form, ...(editing ? { id: editing.id } : {}) });
  };

  const filtered = skills.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Skills</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}><Plus className="mr-2 h-4 w-4" />Add Skill</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editing ? "Edit Skill" : "New Skill"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Level: {form.level}%</Label>
                <Slider value={[form.level]} onValueChange={([v]) => setForm({ ...form, level: v })} max={100} step={1} />
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
        <Input placeholder="Search skills..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">No skills found</TableCell></TableRow>
              ) : filtered.map((skill) => (
                <TableRow key={skill.id}>
                  <TableCell className="font-medium">{skill.name}</TableCell>
                  <TableCell><span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{skill.category}</span></TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(skill)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteMutation.mutate(skill.id)}><Trash2 className="h-4 w-4" /></Button>
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

export default AdminSkills;
