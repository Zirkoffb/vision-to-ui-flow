import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

interface ClientTableData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status: "prospective" | "processing" | "expires" | "active";
  value: string;
  date: string;
  progress?: number;
}

interface ClientTableProps {
  data: ClientTableData[];
  title: string;
  className?: string;
}

export const ClientTable = ({ data, title, className }: ClientTableProps) => {
  const statusConfig = {
    prospective: { label: "Prospective", variant: "secondary" as const },
    processing: { label: "Processing", variant: "default" as const },
    expires: { label: "Expires in 10 days", variant: "destructive" as const },
    active: { label: "Active", variant: "outline" as const }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold font-urbanist">{title}</h3>
        <Button variant="ghost" size="sm">
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-medium">Client</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Value</TableHead>
              <TableHead className="font-medium">Date</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((client) => (
              <TableRow 
                key={client.id} 
                className="hover:bg-muted/20 transition-colors group"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={client.avatar} alt={client.name} />
                      <AvatarFallback className="text-xs">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium font-urbanist">{client.name}</div>
                      <div className="text-xs text-muted-foreground">{client.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={statusConfig[client.status].variant}>
                    {statusConfig[client.status].label}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{client.value}</TableCell>
                <TableCell className="text-muted-foreground">{client.date}</TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};