import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Trash2, Mail, MailOpen } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

const AdminMessages = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const toggleReadMutation = useMutation({
    mutationFn: async ({ id, is_read }: { id: string; is_read: boolean }) => {
      const { error } = await supabase.from("contact_messages").update({ is_read }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-messages"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_messages").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-messages"] });
      toast.success("Message deleted");
    },
  });

  const filtered = messages.filter(
    (m) => m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Messages</h2>
        <Badge variant="secondary">{messages.filter((m) => !m.is_read).length} unread</Badge>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search messages..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {isLoading ? (
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-8"></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground">No messages found</TableCell></TableRow>
              ) : filtered.map((msg) => (
                <TableRow key={msg.id} className={!msg.is_read ? "bg-primary/5" : ""}>
                  <TableCell>
                    {msg.is_read ? (
                      <MailOpen className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Mail className="h-4 w-4 text-primary" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{msg.name}</TableCell>
                  <TableCell><a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.email}</a></TableCell>
                  <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{format(new Date(msg.created_at), "MMM d, yyyy")}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleReadMutation.mutate({ id: msg.id, is_read: !msg.is_read })}
                        title={msg.is_read ? "Mark unread" : "Mark read"}
                      >
                        {msg.is_read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteMutation.mutate(msg.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
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

export default AdminMessages;
