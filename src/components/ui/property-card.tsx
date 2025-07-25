import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MapPin, Bed, Bath, Square, Heart, Star } from "lucide-react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  status: "rate_offer" | "residence" | "sold" | "new";
  rating?: number;
  isFavorite?: boolean;
  className?: string;
}

export const PropertyCard = ({
  id,
  image,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  status,
  rating,
  isFavorite = false,
  className
}: PropertyCardProps) => {
  const statusConfig = {
    rate_offer: { label: "Rate Offer", variant: "destructive" as const },
    residence: { label: "Residence", variant: "default" as const },
    sold: { label: "Sold", variant: "secondary" as const },
    new: { label: "New", variant: "default" as const }
  };

  return (
    <Card className={cn(
      "group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-[1.02]",
      className
    )}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        <Badge 
          variant={statusConfig[status].variant}
          className="absolute top-3 left-3 font-medium"
        >
          {statusConfig[status].label}
        </Badge>
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/80 hover:bg-white"
        >
          <Heart className={cn(
            "h-4 w-4",
            isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
          )} />
        </Button>

        {/* Property ID */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
          {id}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold font-urbanist text-lg leading-tight">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" />
              {address}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                {beds}
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                {baths}
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                {sqft}
              </div>
            </div>

            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            )}
          </div>

          <div className="text-xl font-bold font-urbanist text-primary">
            {price}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};