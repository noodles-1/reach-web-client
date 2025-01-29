'use client'

import { useState, useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { addDays, format } from "date-fns";

const chartConfig = {
    counts: {
        label: "Counts",
        color: "var(--chart-1)",
    },
};

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function WasteTrends({ item, date }) {
    const [items, setItems] = useState(null);
    const completeDates = [];
    let maxCount = 0;

    if (items && date && date.to && date.from) {
        const chartMap = new Map();
        items.forEach(item => {
            const key = `${item.month}/${item.day}/${item.year}`;
            chartMap.set(key, item.item_count);
            maxCount += parseInt(item.item_count);
        });

        let currDate = new Date(date.from);
        const endDate = new Date(date.to);

        while (currDate <= endDate) {
            const monthDate = `${currDate.getMonth() + 1}/${currDate.getDate()}`
            const key = `${monthDate}/${currDate.getFullYear()}`;
            if (chartMap.has(key))
                completeDates.push({ date: monthDate, counts: chartMap.get(key) });
            else
                completeDates.push({ date: monthDate, counts: 0 });
            currDate = addDays(currDate, 1);
        }
    }

    useEffect(() => {
        let interval;

        const fetchData = async () => {
            if (date && date.from && date.to) {
                const dateFrom = format(date.from, 'yyyy-MM-dd');
                const dateTo = format(date.to, 'yyyy-MM-dd');
                const response = await fetch(`${SERVER_URL}/item/${item}?dateFrom=${dateFrom}&dateTo=${dateTo}`);
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
        <Card>
            <CardHeader>
                <CardTitle className="text-xl sm:text-2xl"> Waste trend ({item}) </CardTitle>
                <CardDescription>
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
                </CardDescription>
            </CardHeader>
            <CardContent>
                {
                    items ? (
                        <ChartContainer
                            config={chartConfig}
                        >
                            <LineChart
                                accessibilityLayer
                                data={completeDates}
                                margin={{
                                    left: 12,
                                    right: 12,
                                    top: 30
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <YAxis 
                                    hide
                                    domain={[0, maxCount]}
                                />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={10}
                                    interval={completeDates.length > 10 ? Math.floor(completeDates.length / 10) : 0}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <Line
                                    dataKey="counts"
                                    type="linear"
                                    stroke="var(--color-counts)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ChartContainer>
                    ) : (
                        <h1> No data. </h1>
                    )
                }
            </CardContent>
        </Card>
    )
}