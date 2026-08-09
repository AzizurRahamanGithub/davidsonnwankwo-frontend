import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/dashboard/stats-card"
import { TrendingUp, Users, Eye, MessageSquare, Activity } from "lucide-react"

const topSports = [
  { name: "Basketball", views: 1234, percentage: 28 },
  { name: "Football", views: 1098, percentage: 25 },
  { name: "Soccer", views: 987, percentage: 22 },
  { name: "Baseball", views: 654, percentage: 15 },
  { name: "Other", views: 432, percentage: 10 },
]

const engagementData = [
  { month: "Jul", views: 245, messages: 45 },
  { month: "Aug", views: 312, messages: 58 },
  { month: "Sep", views: 389, messages: 67 },
  { month: "Oct", views: 456, messages: 82 },
  { month: "Nov", views: 523, messages: 95 },
  { month: "Dec", views: 612, messages: 108 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="mt-2 text-muted-foreground">Track your recruitment performance and insights</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Profile Views"
          value="4,523"
          change="+18% from last month"
          changeType="positive"
          icon={Eye}
        />
        <StatsCard
          title="Engagement Rate"
          value="67%"
          change="+5% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <StatsCard title="Active Athletes" value="248" change="+12 this month" changeType="positive" icon={Users} />
        <StatsCard
          title="Messages Sent"
          value="385"
          change="+24% from last month"
          changeType="positive"
          icon={MessageSquare}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Sports */}
        <Card>
          <CardHeader>
            <CardTitle>Top Sports by Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSports.map((sport) => (
                <div key={sport.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{sport.name}</span>
                    <span className="text-muted-foreground">{sport.views} views</span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-primary transition-all" style={{ width: `${sport.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementData.map((data) => (
                <div
                  key={data.month}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0"
                >
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5 text-primary" />
                      <span className="text-muted-foreground">{data.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5 text-secondary" />
                      <span className="text-muted-foreground">{data.messages}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-80 items-center justify-center rounded-lg bg-muted/50">
            <div className="text-center">
              <Activity className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-sm text-muted-foreground">Performance chart visualization</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
