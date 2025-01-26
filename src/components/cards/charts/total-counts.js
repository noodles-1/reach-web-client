'use client'

import { useState, useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Label, Pie, PieChart } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { format } from "date-fns";

const chartConfig = {
    counts: {
      label: "Counts",
    },
    bottles: {
      label: "Bottles",
      color: "var(--chart-1)",
    },
    utensils: {
      label: "Utensils",
      color: "var(--chart-2)",
    }
};

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const TotalCounts = ({ date }) => {
    const [items, setItems] = useState(null);
    const chartData = [
        { item: "bottles", counts: items?.filter(item => item.name === 'bottle').length, fill: "var(--color-bottles)" },
        { item: "utensils", counts: items?.filter(item => item.name === 'utensil').length, fill: "var(--color-utensils)" },
    ];

    useEffect(() => {
        let interval;
        
        const fetchData = async () => {
            if (date && date.from && date.to) {
                const dateFrom = format(date.from, 'yyyy-MM-dd');
                const dateTo = format(date.to, 'yyyy-MM-dd');
                const response = await fetch(`${SERVER_URL}/item?dateFrom=${dateFrom}&dateTo=${dateTo}`);
                const data = await response.json();
                if (data.length)
                    setItems(data);
                else
                    setItems(null);
            }
            else
                setItems(null);
        };
        
        fetchData();
        interval = setInterval(fetchData, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [date]);

    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle className="text-xl sm:text-2xl"> Waste composition </CardTitle>
                <CardDescription>
                    Total waste items (
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                            ) : (
                            <span>Pick a date</span>
                        )}
                    )
                </CardDescription>
            </CardHeader>
            <CardContent>
                {
                    items ? (
                        <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="counts"
                                    nameKey="item"
                                    innerRadius={65}
                                    strokeWidth={5}
                                >
                                    <Label
                                        content={({ viewBox }) => {
                                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-foreground text-3xl font-bold"
                                                        >
                                                            {items?.length ?? 0}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Total waste
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    ) : (
                        <h1> No data. </h1>
                    )
                }
            </CardContent>
        </Card>
    );
}
 
export default TotalCounts;