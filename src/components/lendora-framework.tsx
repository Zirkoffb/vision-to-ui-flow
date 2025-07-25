import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { RankingDisplay } from "@/components/ui/ranking-display";
import { ActivityItem } from "@/components/ui/activity-item";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { DashboardGrid } from "@/components/ui/dashboard-grid";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Calendar, Phone, FileText, Target, Star } from "lucide-react";

export const LendoraFramework = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle font-urbanist">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl font-urbanist">Lendora</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Loan Center</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Applications</a>
          </nav>
          
          <Button variant="default" className="bg-gradient-primary border-0 shadow-warm">
            Get the App
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Funding Overview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold font-urbanist">Funding Overview</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">This Month</span>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
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
            />
            
            <MetricCard
              title="Expanded Loan"
              value="1.75"
              unit="%"
              variant="warm"
              subtitle="Target achieved"
            />
          </DashboardGrid>
        </section>

        {/* Main Dashboard Grid */}
        <DashboardGrid columns={3}>
          {/* Ranking Card */}
          <RankingDisplay
            title="Your Rank"
            subtitle="Rating by Company Activity"
            currentRank={26}
            totalRanks={50}
            change={6}
          />

          {/* Activities List */}
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
                icon={<Phone className="h-4 w-4" />}
              />
              <ActivityItem
                title="Meeting"
                count={12}
                total={12}
                status="complete"
                icon={<Calendar className="h-4 w-4" />}
              />
              <ActivityItem
                title="Cards Written"
                count={14}
                total={18}
                status="closed"
                icon={<FileText className="h-4 w-4" />}
              />
              <ActivityItem
                title="New Leads"
                count={10}
                total={24}
                status="active"
                icon={<Users className="h-4 w-4" />}
              />
              <ActivityItem
                title="Events"
                count={11}
                total={15}
                status="complete"
                icon={<Target className="h-4 w-4" />}
              />
            </CardContent>
          </Card>

          {/* Testimonial */}
          <TestimonialCard
            quote="Our goal was to reduce tool overload and give advisors a streamlined workflow."
            author="Victoria P."
            role="UX Designer"
            variant="gradient"
          />
        </DashboardGrid>

        {/* Feature Showcase */}
        <section>
          <h2 className="text-xl font-bold font-urbanist mb-6">Framework Components</h2>
          
          <DashboardGrid columns={2}>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-urbanist">
                  <Star className="h-5 w-5 text-warning" />
                  Metric Cards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Beautiful metric displays with gradients, trends, and status indicators.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard
                    title="Success Rate"
                    value="94.2"
                    unit="%"
                    variant="glow"
                  />
                  <MetricCard
                    title="Completions"
                    value="847"
                    trend="up"
                    trendValue="+12%"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-urbanist">
                  <TrendingUp className="h-5 w-5 text-success" />
                  Status & Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track performance with visual rankings and activity status badges.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Performance:</span>
                    <div className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs font-medium">
                      Complete
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary w-3/4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </DashboardGrid>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Lendora UI Framework • Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};