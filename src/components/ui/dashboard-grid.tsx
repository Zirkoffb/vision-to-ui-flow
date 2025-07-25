import React from "react";
import { cn } from "@/lib/utils";

interface DashboardGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export const DashboardGrid = ({ 
  children, 
  className, 
  columns = 3 
}: DashboardGridProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  };

  return (
    <div className={cn(
      "grid gap-6",
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  );
};