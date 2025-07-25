import React from "react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/status-badge";
import { MoreHorizontal } from "lucide-react";

interface ActivityItemProps {
  title: string;
  count: number;
  total?: number;
  status: "active" | "complete" | "closed" | "pending";
  icon?: React.ReactNode;
  className?: string;
}

export const ActivityItem = ({
  title,
  count,
  total,
  status,
  icon,
  className
}: ActivityItemProps) => {
  return (
    <div className={cn(
      "flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors",
      className
    )}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-2 h-2 rounded-full bg-current opacity-60" />
        )}
        <span className="font-medium font-urbanist">{title}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-right">
          <span className="text-lg font-bold font-urbanist">{count}</span>
          {total && (
            <span className="text-sm text-muted-foreground">/{total}</span>
          )}
        </div>
        
        <StatusBadge status={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </StatusBadge>
        
        <button className="p-1 hover:bg-muted rounded">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};