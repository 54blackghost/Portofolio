import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderKanban, Wrench, Star, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
  const { data: projectCount } = useQuery({
    queryKey: ["admin-project-count"],
    queryFn: async () => {
      const { count } = await supabase.from("projects").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const { data: skillCount } = useQuery({
    queryKey: ["admin-skill-count"],
    queryFn: async () => {
      const { count } = await supabase.from("skills").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const { data: testimonialCount } = useQuery({
    queryKey: ["admin-testimonial-count"],
    queryFn: async () => {
      const { count } = await supabase.from("testimonials").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const { data: messageCount } = useQuery({
    queryKey: ["admin-message-count"],
    queryFn: async () => {
      const { count } = await supabase.from("contact_messages").select("*", { count: "exact", head: true });
      return count ?? 0;
    },
  });

  const stats = [
    { title: "Projects", count: projectCount ?? 0, icon: FolderKanban, color: "text-blue-500" },
    { title: "Skills", count: skillCount ?? 0, icon: Wrench, color: "text-green-500" },
    { title: "Testimonials", count: testimonialCount ?? 0, icon: Star, color: "text-yellow-500" },
    { title: "Messages", count: messageCount ?? 0, icon: MessageSquare, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.count}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
