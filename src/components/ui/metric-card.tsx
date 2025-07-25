import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  trend?: "up" | "down";
  trendValue?: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "warm" | "glow";
}

export const MetricCard = ({
  title,
  value,
  unit,
  trend,
  trendValue,
  subtitle,
  className,
  variant = "default"
}: MetricCardProps) => {
  const variantStyles = {
    default: "bg-card border",
    warm: "bg-gradient-warm border-0 text-white shadow-warm",
    glow: "bg-gradient-glow border-0 shadow-glow"
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-soft hover:scale-[1.02]",
      variantStyles[variant],
      className
    )}>
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className={cn(
            "text-sm font-medium",
            variant === "warm" ? "text-white/80" : "text-muted-foreground"
          )}>
            {title}
          </p>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-urbanist">
              {unit && <span className="text-lg font-medium">{unit}</span>}
              {value}
            </span>
            {trend && trendValue && (
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium",
                trend === "up" ? "text-success" : "text-destructive"
              )}>
                {trend === "up" ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {trendValue}
              </div>
            )}
          </div>
          
          {subtitle && (
            <p className={cn(
              "text-xs",
              variant === "warm" ? "text-white/60" : "text-muted-foreground"
            )}>
              {subtitle}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};