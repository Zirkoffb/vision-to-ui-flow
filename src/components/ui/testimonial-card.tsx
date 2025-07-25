import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
  variant?: "default" | "gradient";
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  className,
  variant = "default"
}: TestimonialCardProps) => {
  return (
    <Card className={cn(
      "shadow-soft transition-all duration-300 hover:shadow-warm",
      variant === "gradient" && "bg-gradient-warm border-0 text-white",
      className
    )}>
      <CardContent className="p-6 space-y-4">
        <blockquote className={cn(
          "text-lg font-medium leading-relaxed font-urbanist",
          variant === "gradient" ? "text-white" : "text-foreground"
        )}>
          "{quote}"
        </blockquote>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <p className={cn(
              "font-semibold font-urbanist",
              variant === "gradient" ? "text-white" : "text-foreground"
            )}>
              {author}
            </p>
            <p className={cn(
              "text-sm",
              variant === "gradient" ? "text-white/80" : "text-muted-foreground"
            )}>
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};