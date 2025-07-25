import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Send, Paperclip, Phone, Video, MoreHorizontal, Star } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  avatar?: string;
}

interface CommunicationHubProps {
  title: string;
  messages: ChatMessage[];
  onSendMessage?: (message: string) => void;
  activeClients?: number;
  className?: string;
}

export const CommunicationHub = ({
  title,
  messages,
  onSendMessage,
  activeClients = 0,
  className
}: CommunicationHubProps) => {
  const [newMessage, setNewMessage] = React.useState("");

  const handleSend = () => {
    if (newMessage.trim() && onSendMessage) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <Card className={cn("shadow-soft flex flex-col h-96", className)}>
      <CardHeader className="pb-3 border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-urbanist">{title}</CardTitle>
            {activeClients > 0 && (
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">
                  {activeClients} active client{activeClients !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {/* Messages Area */}
      <CardContent className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.isOwn ? "justify-end" : "justify-start"
            )}
          >
            {!message.isOwn && (
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-medium">
                {message.sender.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            
            <div className={cn(
              "max-w-[70%] rounded-lg p-3",
              message.isOwn 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted"
            )}>
              {!message.isOwn && (
                <div className="text-xs font-medium mb-1">{message.sender}</div>
              )}
              <div className="text-sm">{message.message}</div>
              <div className={cn(
                "text-xs mt-1",
                message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
              )}>
                {message.timestamp}
              </div>
            </div>
            
            {message.isOwn && (
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                You
              </div>
            )}
          </div>
        ))}
      </CardContent>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <div className="flex-1 flex gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <Button variant="ghost" size="sm">
              <Paperclip className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={handleSend} size="sm" className="px-4">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};