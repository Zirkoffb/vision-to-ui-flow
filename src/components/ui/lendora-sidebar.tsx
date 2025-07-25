import React from "react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  BarChart3, 
  Users, 
  Building, 
  FileText, 
  Settings, 
  CreditCard,
  TrendingUp,
  Calendar,
  MessageSquare,
  Bell
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Loan Center", href: "/loans", icon: CreditCard },
  { name: "Multicasting Hub", href: "/multicasting", icon: MessageSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Applications", href: "/applications", icon: FileText },
  { name: "Management", href: "/management", icon: Users },
  { name: "Reports", href: "/reports", icon: TrendingUp },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function LendoraSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Sidebar className={cn("border-r bg-card/50 backdrop-blur-sm", isCollapsed ? "w-16" : "w-64")}>
      <SidebarHeader className="p-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl font-urbanist">Lendora</span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">L</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:bg-muted/50 hover:scale-[1.02]",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-soft" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Notification indicator when collapsed */}
      {isCollapsed && (
        <div className="absolute top-4 right-2">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
        </div>
      )}
    </Sidebar>
  );
}