import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

interface AnalyticsChartProps {
  title: string;
  data: Array<{ name: string; value: number; }>;
  currentValue: string;
  unit?: string;
  trend?: "up" | "down";
  trendValue?: string;
  variant?: "line" | "area";
  color?: string;
  className?: string;
}

export const AnalyticsChart = ({
  title,
  data,
  currentValue,
  unit,
  trend,
  trendValue,
  variant = "area",
  color = "hsl(var(--primary))",
  className
}: AnalyticsChartProps) => {
  return (
    <Card className={cn("shadow-soft", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-urbanist">{title}</CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold font-urbanist">
              {unit && <span className="text-sm font-medium text-muted-foreground">{unit}</span>}
              {currentValue}
            </div>
            {trend && trendValue && (
              <div className={cn(
                "text-xs font-medium flex items-center gap-1",
                trend === "up" ? "text-success" : "text-destructive"
              )}>
                <span>{trend === "up" ? "↗" : "↘"}</span>
                {trendValue}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {variant === "area" ? (
              <AreaChart data={data}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  interval="preserveStartEnd"
                />
                <YAxis hide />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={2}
                  fill="url(#colorGradient)"
                />
              </AreaChart>
            ) : (
              <LineChart data={data}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                />
                <YAxis hide />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};