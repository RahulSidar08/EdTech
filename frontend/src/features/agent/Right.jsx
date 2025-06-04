import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Users, GraduationCap, Award, TrendingUp,
    ArrowUpRight, ArrowDownRight, AlertCircle,
    FileSpreadsheet
} from 'lucide-react';
import { cn } from "@/lib/utils";
export const Right = () => {
    return (
        <>
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                        title="Total Students"
                        value="3,721"
                        change="+12.4%"
                        trend="up"
                        description="vs. previous month"
                        icon={<GraduationCap className="h-5 w-5" />}
                    />
                    <MetricCard
                        title="Scholarships"
                        value="42"
                        change="-3.1%"
                        trend="down"
                        description="vs. previous month"
                        icon={<Award className="h-5 w-5" />}
                    />
                    <MetricCard
                        title="Conversion Rate"
                        value="64.8%"
                        change="+2.3%"
                        trend="up"
                        description="vs. previous month"
                        icon={<TrendingUp className="h-5 w-5" />}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-blue-500 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    Welcome to the Agent Panel
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-2xl mt-4 text-gray-800">
                    Use the sidebar to navigate and manage assigned students or applications.
                    Stay productive and help students succeed!
                </p>
            </div>

        </>
    )
}


function MetricCard({ title, value, change, trend, description, icon }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {icon}
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <div className="flex items-center mt-1 text-xs">
                    <span className={cn(
                        "flex items-center",
                        trend === 'up' ? "text-emerald-500" : "text-rose-500"
                    )}>
                        {trend === 'up' ?
                            <ArrowUpRight className="h-3 w-3 mr-1" /> :
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                        }
                        {change}
                    </span>
                    <span className="text-muted-foreground ml-1">{description}</span>
                </div>
            </CardContent>
        </Card>
    );
}