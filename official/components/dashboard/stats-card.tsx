import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
}

export function StatsCard({ title, value, change, changeType = "neutral", icon: Icon }: StatsCardProps) {
  return (
    <Card className="border-white/5 bg-white/5 rounded-none">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{title}</p>
            <p className="mt-2 text-4xl font-black italic tracking-tighter text-white">{value}</p>
            {change && (
              <p
                className={`mt-2 text-xs font-bold ${
                  changeType === "positive"
                    ? "text-primary"
                    : changeType === "negative"
                      ? "text-red-500"
                      : "text-white/40"
                }`}
              >
                {change}
              </p>
            )}
          </div>
          <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-black/50">
            <Icon className="h-7 w-7 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
