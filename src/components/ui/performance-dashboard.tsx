import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, TrendingUp, Target, Users, DollarSign } from "lucide-react";

interface PerformanceMetric {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down";
  target?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface PerformanceDashboardProps {
  title: string;
  metrics: PerformanceMetric[];
  overallScore: number;
  className?: string;
}

export const PerformanceDashboard = ({
  title,
  metrics,
  overallScore,
  className
}: PerformanceDashboardProps) => {
  return (
    <Card className={cn("shadow-soft", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-urbanist">{title}</CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold font-urbanist">{overallScore}%</div>
            <div className="text-xs text-muted-foreground">Overall Score</div>
          </div>
        </div>
        <Progress value={overallScore} className="h-2 mt-2" />
      </CardHeader>
      
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              
              <div>
                <div className="font-medium font-urbanist">{metric.label}</div>
                {metric.target && (
                  <div className="text-xs text-muted-foreground">
                    Target: {metric.target}
                  </div>
                )}
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-lg font-urbanist">{metric.value}</div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium",
                metric.trend === "up" ? "text-green-600" : "text-red-600"
              )}>
                {metric.trend === "up" ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {Math.abs(metric.change)}%
              </div>
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="pt-2 border-t">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="w-full">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Target className="h-4 w-4 mr-2" />
              Set Goals
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};