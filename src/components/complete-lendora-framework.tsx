import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LendoraSidebar } from "@/components/ui/lendora-sidebar";
import { MetricCard } from "@/components/ui/metric-card";
import { RankingDisplay } from "@/components/ui/ranking-display";
import { ActivityItem } from "@/components/ui/activity-item";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PropertyCard } from "@/components/ui/property-card";
import { AnalyticsChart } from "@/components/ui/analytics-chart";
import { ClientTable } from "@/components/ui/client-table";
import { FilterBar } from "@/components/ui/filter-bar";
import { LoanApplicationCard } from "@/components/ui/loan-application-card";
import { TeamCollaboration } from "@/components/ui/team-collaboration";
import { PerformanceDashboard } from "@/components/ui/performance-dashboard";
import { CommunicationHub } from "@/components/ui/communication-hub";
import { DashboardGrid } from "@/components/ui/dashboard-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Settings, User, TrendingUp, Users, DollarSign, Home } from "lucide-react";

// Sample data
const analyticsData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
];

const clientsData = [
  {
    id: "CLI001",
    name: "Alex Morano",
    email: "alex@lendora.com",
    status: "prospective" as const,
    value: "$450,000",
    date: "2024-01-15"
  },
  {
    id: "CLI002", 
    name: "Victoria P.",
    email: "victoria@example.com",
    status: "processing" as const,
    value: "$720,000",
    date: "2024-01-12"
  },
  {
    id: "CLI003",
    name: "John Smith",
    email: "john@example.com", 
    status: "expires" as const,
    value: "$280,000",
    date: "2024-01-10"
  }
];

const teamMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Advisor",
    status: "online" as const,
    notifications: 3
  },
  {
    id: "2", 
    name: "Mike Chen",
    role: "Loan Specialist",
    status: "busy" as const,
    lastActive: "5m ago"
  },
  {
    id: "3",
    name: "Emma Davis", 
    role: "UX Designer",
    status: "away" as const,
    lastActive: "1h ago"
  }
];

const performanceMetrics = [
  {
    label: "Closed Deals",
    value: "24",
    change: 12,
    trend: "up" as const,
    target: "30",
    icon: TrendingUp
  },
  {
    label: "Active Clients",
    value: "156", 
    change: 8,
    trend: "up" as const,
    icon: Users
  },
  {
    label: "Revenue",
    value: "$2.4M",
    change: -3,
    trend: "down" as const,
    target: "$2.5M", 
    icon: DollarSign
  }
];

const messages = [
  {
    id: "1",
    sender: "Alex Morano",
    message: "Hi! I wanted to check on the status of my mortgage application #54150574.",
    timestamp: "10:30 AM",
    isOwn: false
  },
  {
    id: "2", 
    sender: "You",
    message: "Hello Alex! Let me check that for you right away. Your application is currently in the final review stage.",
    timestamp: "10:32 AM",
    isOwn: true
  },
  {
    id: "3",
    sender: "Alex Morano", 
    message: "Great! How long does the final review typically take?",
    timestamp: "10:33 AM",
    isOwn: false
  }
];

export const CompleteLendoraFramework = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle font-urbanist">
        <LendoraSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold font-urbanist">Funding Overview</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search</span>
              </div>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6 space-y-8 overflow-auto">
            {/* Top Metrics */}
            <section>
              <DashboardGrid columns={4}>
                <MetricCard
                  title="Your Rank"
                  value="26"
                  subtitle="Rating by Company Activity"
                  trend="up"
                  trendValue="+6"
                />
                
                <MetricCard
                  title="Rates Analytics"
                  value="6.91"
                  unit="%"
                  subtitle="Updated 12/24 at 9:00 AM"
                  trend="up"
                  trendValue="3.64%"
                />
                
                <MetricCard
                  title="Floating Rate"
                  value="3.64"
                  unit="%"
                  trend="up"
                  trendValue="1.75%"
                  variant="warm"
                />
                
                <MetricCard
                  title="Expanded Loan"
                  value="1.75"
                  unit="%"
                  variant="glow"
                  subtitle="Target achieved"
                />
              </DashboardGrid>
            </section>

            {/* Analytics Charts */}
            <section>
              <h2 className="text-xl font-bold font-urbanist mb-4">Analytics Overview</h2>
              <DashboardGrid columns={3}>
                <AnalyticsChart
                  title="Stable Rate"
                  data={analyticsData}
                  currentValue="6.91"
                  unit="%"
                  trend="up"
                  trendValue="2.1%"
                  variant="area"
                />
                
                <AnalyticsChart
                  title="Floating Rate"
                  data={analyticsData.map(d => ({ ...d, value: d.value * 0.6 }))}
                  currentValue="3.64"
                  unit="%"
                  trend="up"
                  trendValue="1.8%"
                  variant="line"
                  color="hsl(var(--success))"
                />
                
                <AnalyticsChart
                  title="Expanded Loan"
                  data={analyticsData.map(d => ({ ...d, value: d.value * 0.2 }))}
                  currentValue="1.75"
                  unit="%"
                  trend="down"
                  trendValue="0.3%"
                  color="hsl(var(--warning))"
                />
              </DashboardGrid>
            </section>

            {/* Main Dashboard Content */}
            <section>
              <DashboardGrid columns={3}>
                {/* Ranking Display */}
                <RankingDisplay
                  title="Your Rank"
                  subtitle="Rating by Company Activity"
                  currentRank={26}
                  totalRanks={50}
                  change={6}
                />

                {/* Activities */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="font-urbanist">Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ActivityItem
                      title="Phone Calls"
                      count={6}
                      total={20}
                      status="active"
                    />
                    <ActivityItem
                      title="Meeting"
                      count={12}
                      total={12}
                      status="complete"
                    />
                    <ActivityItem
                      title="Cards Written"
                      count={14}
                      total={18}
                      status="closed"
                    />
                    <ActivityItem
                      title="New Leads"
                      count={10}
                      total={24}
                      status="active"
                    />
                  </CardContent>
                </Card>

                {/* Performance Dashboard */}
                <PerformanceDashboard
                  title="Performance Metrics"
                  metrics={performanceMetrics}
                  overallScore={87}
                />
              </DashboardGrid>
            </section>

            {/* Properties Section */}
            <section>
              <h2 className="text-xl font-bold font-urbanist mb-4">Property Listings</h2>
              
              <FilterBar
                showPropertyFilters={true}
                className="mb-6"
              />
              
              <DashboardGrid columns={3}>
                <PropertyCard
                  id="#54150574"
                  image="/api/placeholder/400/200"
                  title="No.1 House"
                  address="Downtown District"
                  price="$750,000"
                  beds={3}
                  baths={2}
                  sqft="2,100 sq ft"
                  status="rate_offer"
                  rating={4.8}
                />
                
                <PropertyCard
                  id="#44342LR"
                  image="/api/placeholder/400/200"
                  title="No.2 House"
                  address="Suburban Area"
                  price="$520,000"
                  beds={4}
                  baths={3}
                  sqft="2,800 sq ft"
                  status="residence"
                  rating={4.6}
                />
                
                <PropertyCard
                  id="#99281PQ"
                  image="/api/placeholder/400/200"
                  title="Waterfront Villa"
                  address="Coastal District"
                  price="$1,200,000"
                  beds={5}
                  baths={4}
                  sqft="3,500 sq ft"
                  status="new"
                  rating={4.9}
                  isFavorite={true}
                />
              </DashboardGrid>
            </section>

            {/* Loan Applications */}
            <section>
              <h2 className="text-xl font-bold font-urbanist mb-4">Loan Applications</h2>
              <DashboardGrid columns={2}>
                <LoanApplicationCard
                  id="LA001"
                  clientName="Alex Morano"
                  loanAmount="$450,000"
                  status="in_review"
                  progress={75}
                  dueDate="Jan 25"
                  priority="high"
                  documents={8}
                />
                
                <LoanApplicationCard
                  id="LA002"
                  clientName="Victoria P."
                  loanAmount="$720,000"
                  status="approved"
                  progress={100}
                  dueDate="Jan 20"
                  priority="medium"
                  documents={12}
                />
              </DashboardGrid>
            </section>

            {/* Communication & Team */}
            <section>
              <DashboardGrid columns={2}>
                <CommunicationHub
                  title="Client Communications"
                  messages={messages}
                  activeClients={5}
                />
                
                <TeamCollaboration
                  title="Team Collaboration"
                  members={teamMembers}
                />
              </DashboardGrid>
            </section>

            {/* Client Management */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <ClientTable
                    title="Recent Clients"
                    data={clientsData}
                  />
                </div>
                
                <div className="space-y-4">
                  <TestimonialCard
                    quote="Our goal was to reduce tool overload and give advisors a streamlined workflow."
                    author="Victoria P."
                    role="UX Designer"
                    variant="gradient"
                  />
                  
                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-sm font-urbanist">Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Clients</span>
                        <span className="font-bold">156</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Active Loans</span>
                        <span className="font-bold">89</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">This Month</span>
                        <span className="font-bold text-success">+12%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};