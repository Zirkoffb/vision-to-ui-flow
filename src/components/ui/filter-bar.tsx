import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, Filter, Calendar, MapPin, DollarSign, Home } from "lucide-react";

interface FilterBarProps {
  onSearch?: (value: string) => void;
  onFilterChange?: (key: string, value: string) => void;
  showPropertyFilters?: boolean;
  showClientFilters?: boolean;
  activeFilters?: Record<string, string>;
  className?: string;
}

export const FilterBar = ({
  onSearch,
  onFilterChange,
  showPropertyFilters = false,
  showClientFilters = false,
  activeFilters = {},
  className
}: FilterBarProps) => {
  const activeFilterCount = Object.keys(activeFilters).length;

  return (
    <Card className={cn("shadow-soft", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-urbanist">
          <Filter className="h-5 w-5" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>

        {/* Property Filters */}
        {showPropertyFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Select onValueChange={(value) => onFilterChange?.("status", value)}>
              <SelectTrigger>
                <Home className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="rate_offer">Rate Offer</SelectItem>
                <SelectItem value="residence">Residence</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="new">New</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => onFilterChange?.("price", value)}>
              <SelectTrigger>
                <DollarSign className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-500k">$0 - $500k</SelectItem>
                <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                <SelectItem value="1m-plus">$1M+</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => onFilterChange?.("location", value)}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="suburbs">Suburbs</SelectItem>
                <SelectItem value="waterfront">Waterfront</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => onFilterChange?.("date", value)}>
              <SelectTrigger>
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Client Filters */}
        {showClientFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Select onValueChange={(value) => onFilterChange?.("clientStatus", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Client Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="prospective">Prospective</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expires">Expires Soon</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => onFilterChange?.("value", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Value Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Values</SelectItem>
                <SelectItem value="low">Under $100k</SelectItem>
                <SelectItem value="medium">$100k - $500k</SelectItem>
                <SelectItem value="high">$500k+</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => onFilterChange?.("timeframe", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Time Frame" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Clear Filters */}
        {activeFilterCount > 0 && (
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                Object.keys(activeFilters).forEach(key => {
                  onFilterChange?.(key, "");
                });
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};