import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Clock, Calendar, DollarSign, FileText, MoreHorizontal } from "lucide-react";

interface LoanApplicationProps {
  id: string;
  clientName: string;
  loanAmount: string;
  status: "pending" | "approved" | "rejected" | "in_review";
  progress: number;
  dueDate: string;
  priority: "high" | "medium" | "low";
  documents: number;
  className?: string;
}

export const LoanApplicationCard = ({
  id,
  clientName,
  loanAmount,
  status,
  progress,
  dueDate,
  priority,
  documents,
  className
}: LoanApplicationProps) => {
  const statusConfig = {
    pending: { label: "Pending", variant: "secondary" as const, color: "bg-gray-100" },
    approved: { label: "Approved", variant: "outline" as const, color: "bg-green-100" },
    rejected: { label: "Rejected", variant: "destructive" as const, color: "bg-red-100" },
    in_review: { label: "In Review", variant: "default" as const, color: "bg-blue-100" }
  };

  const priorityConfig = {
    high: { color: "text-red-500", bg: "bg-red-50" },
    medium: { color: "text-yellow-500", bg: "bg-yellow-50" },
    low: { color: "text-green-500", bg: "bg-green-50" }
  };

  return (
    <Card className={cn(
      "group hover:shadow-warm transition-all duration-300 hover:scale-[1.01]",
      statusConfig[status].color,
      className
    )}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold font-urbanist text-lg">{clientName}</h3>
              <p className="text-sm text-muted-foreground">Application #{id}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-2 h-2 rounded-full",
                priorityConfig[priority].bg
              )}>
                <div className={cn(
                  "w-full h-full rounded-full",
                  priorityConfig[priority].color.replace('text-', 'bg-')
                )} />
              </div>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Amount and Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="font-bold text-xl font-urbanist">{loanAmount}</span>
            </div>
            
            <Badge variant={statusConfig[status].variant}>
              {statusConfig[status].label}
            </Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Due {dueDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                <span>{documents} docs</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span className={priorityConfig[priority].color}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};