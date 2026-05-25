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

type Testimonial = Tables<"testimonials">;
const emptyTestimonial = { name: "", company: "", message: "" };

const AdminTestimonials = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState(emptyTestimonial);

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (t: typeof form & { id?: string }) => {
      if (t.id) {
        const { error } = await supabase.from("testimonials").update(t).eq("id", t.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("testimonials").insert(t);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      setDialogOpen(false);
      setEditing(null);
      setForm(emptyTestimonial);
      toast.success(editing ? "Testimonial updated" : "Testimonial added");
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      toast.success("Testimonial deleted");
    },
  });

  const openEdit = (t: Testimonial) => {
    setEditing(t);
    setForm({ name: t.name, company: t.company ?? "", message: t.message });
    setDialogOpen(true);
  };

  const openCreate = () => {
    setEditing(null);
    setForm(emptyTestimonial);
    setDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate({ ...form, ...(editing ? { id: editing.id } : {}) });
  };

  const filtered = testimonials.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}><Plus className="mr-2 h-4 w-4" />Add Testimonial</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editing ? "Edit Testimonial" : "New Testimonial"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Message *</Label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
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
        <Input placeholder="Search testimonials..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">No testimonials found</TableCell></TableRow>
              ) : filtered.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.name}</TableCell>
                  <TableCell>{t.company}</TableCell>
                  <TableCell className="max-w-xs truncate">{t.message}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(t)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteMutation.mutate(t.id)}><Trash2 className="h-4 w-4" /></Button>
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

export default AdminTestimonials;
