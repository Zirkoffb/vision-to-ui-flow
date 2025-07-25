import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MessageSquare, Phone, Video, MoreHorizontal, Clock } from "lucide-react";

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  status: "online" | "away" | "busy" | "offline";
  lastActive?: string;
  notifications?: number;
}

interface TeamCollaborationProps {
  title: string;
  members: TeamMemberProps[];
  className?: string;
}

export const TeamCollaboration = ({ title, members, className }: TeamCollaborationProps) => {
  const statusConfig = {
    online: { color: "bg-green-500", label: "Online" },
    away: { color: "bg-yellow-500", label: "Away" },
    busy: { color: "bg-red-500", label: "Busy" },
    offline: { color: "bg-gray-400", label: "Offline" }
  };

  return (
    <Card className={cn("shadow-soft", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-urbanist">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="text-sm">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className={cn(
                  "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white",
                  statusConfig[member.status].color
                )} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium font-urbanist">{member.name}</span>
                  {member.notifications && member.notifications > 0 && (
                    <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {member.notifications}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{member.role}</span>
                  {member.status !== "online" && member.lastActive && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{member.lastActive}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Quick Actions */}
        <div className="pt-2 border-t">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <MessageSquare className="h-4 w-4 mr-2" />
              Team Chat
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Video className="h-4 w-4 mr-2" />
              Start Meeting
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};