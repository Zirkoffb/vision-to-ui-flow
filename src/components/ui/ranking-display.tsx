import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RankingDisplayProps {
  title: string;
  subtitle?: string;
  currentRank: number;
  totalRanks: number;
  change?: number;
  className?: string;
}

export const RankingDisplay = ({
  title,
  subtitle,
  currentRank,
  totalRanks,
  change,
  className
}: RankingDisplayProps) => {
  const progress = ((totalRanks - currentRank) / totalRanks) * 100;

  return (
    <Card className={cn("shadow-soft", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-urbanist">{title}</CardTitle>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground">No.</span>
            <span className="text-4xl font-bold font-urbanist">{currentRank}</span>
            {change && (
              <div className="bg-warning text-warning-foreground px-2 py-1 rounded-lg text-xs font-medium">
                {change > 0 ? `+${change}` : change}
              </div>
            )}
          </div>
        </div>

        {/* Progress visualization */}
        <div className="relative">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>No. {totalRanks}</span>
            <span>No. {Math.ceil(totalRanks / 2)}</span>
            <span>No. 1</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};