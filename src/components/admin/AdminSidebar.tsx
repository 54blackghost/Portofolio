import { LayoutDashboard, FolderKanban, Wrench, MessageSquare, Star, LogOut, Home } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Projects", url: "/admin/projects", icon: FolderKanban },
  { title: "Skills", url: "/admin/skills", icon: Wrench },
  { title: "Testimonials", url: "/admin/testimonials", icon: Star },
  { title: "Messages", url: "/admin/messages", icon: MessageSquare },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && "Admin Panel"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            {!collapsed && "View Site"}
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:text-destructive" onClick={signOut}>
          <LogOut className="mr-2 h-4 w-4" />
          {!collapsed && "Sign Out"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
