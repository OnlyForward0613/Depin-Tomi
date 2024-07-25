"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186 },
  { month: "Tuesday", desktop: 305 },
  { month: "Wednesday", desktop: 237 },
  { month: "Thursday", desktop: 73 },
  { month: "Friday", desktop: 209 },
  { month: "Saturday", desktop: 214 },
  { month: "Sunday", desktop: 254 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#ff0083",
  },
} satisfies ChartConfig

export function AreaChartComponent() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-[16px]">Storage Allocated</CardTitle>
        <div>sdfsfd</div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            className="text-white"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              className="text-white"
              style={{fill: "white"}}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}

export default AreaChartComponent;