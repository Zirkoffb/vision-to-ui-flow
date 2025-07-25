import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "active" | "complete" | "closed" | "pending";
  children: React.ReactNode;
  className?: string;
}

export const StatusBadge = ({ status, children, className }: StatusBadgeProps) => {
  const statusStyles = {
    active: "bg-muted text-muted-foreground hover:bg-muted",
    complete: "bg-warning text-warning-foreground hover:bg-warning/90",
    closed: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    pending: "bg-secondary text-secondary-foreground hover:bg-secondary/90"
  };

  return (
    <Badge 
      variant="secondary" 
      className={cn(
        "font-medium transition-colors",
        statusStyles[status],
        className
      )}
    >
      {children}
    </Badge>
  );
};