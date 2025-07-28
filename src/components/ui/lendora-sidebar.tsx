import React from "react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Brain, 
  Vault, 
  CheckSquare,
  MapPin
} from "lucide-react";

const navigation = [
  { name: "Elementos UI", href: "/", icon: Home },
  { name: "Mapa", href: "/mapa", icon: MapPin },
  { name: "Inteligência", href: "/inteligencia", icon: Brain },
  { name: "Cofre", href: "/cofre", icon: Vault },
  { name: "Tarefas", href: "/tarefas", icon: CheckSquare },
];

export function LendoraSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r bg-card/50 backdrop-blur-sm w-64">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-xl font-urbanist text-slate-800">Elementos UI</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-4 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:bg-slate-100/80 hover:scale-[1.02]",
                    isActive 
                      ? "bg-slate-900 text-white shadow-soft" 
                      : "text-slate-800 hover:text-slate-900"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}