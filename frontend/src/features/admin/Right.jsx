import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
    Users, GraduationCap, Award, TrendingUp,
    ArrowUpRight, ArrowDownRight, AlertCircle,
    FileSpreadsheet
} from 'lucide-react';

import { cn } from "@/lib/utils";

const data = [
    { name: 'Jan', students: 40, agents: 24 },
    { name: 'Feb', students: 55, agents: 27 },
    { name: 'Mar', students: 70, agents: 30 },
    { name: 'Apr', students: 65, agents: 32 },
    { name: 'May', students: 95, agents: 35 },
    { name: 'Jun', students: 120, agents: 38 },
    { name: 'Jul', students: 130, agents: 40 },
];

export const Right = () => {
    return (
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
                    title="Active Agents"
                    value="248"
                    change="+5.2%"
                    trend="up"
                    description="vs. previous month"
                    icon={<Users className="h-5 w-5" />}
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

            <div className="grid gap-6 md:grid-cols-2">

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium">Upcoming Scholarship Deadlines</CardTitle>
                        <CardDescription>Applications closing soon</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <div className="space-y-4">
                            <ScholarshipItem
                                name="International Merit Scholarship"
                                deadline="Jun 15, 2025"
                                applications={145}
                                goal={200}
                                progress={72}
                                urgent
                            />
                            <ScholarshipItem
                                name="STEM Excellence Grant"
                                deadline="Jul 23, 2025"
                                applications={86}
                                goal={150}
                                progress={57}
                            />
                            <ScholarshipItem
                                name="Arts & Humanities Fund"
                                deadline="Aug 10, 2025"
                                applications={35}
                                goal={100}
                                progress={35}
                            />
                            <ScholarshipItem
                                name="First Generation Program"
                                deadline="Sep 05, 2025"
                                applications={42}
                                goal={75}
                                progress={56}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

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

function ScholarshipItem({ name, deadline, applications, goal, progress, urgent }) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <div className="font-medium">{name}</div>
                <div className="flex items-center text-sm">
                    {urgent && (
                        <div className="mr-2 text-amber-500 dark:text-amber-400 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            <span>Urgent</span>
                        </div>
                    )}
                    <span className={urgent ? "text-amber-500 dark:text-amber-400" : ""}>
                        {deadline}
                    </span>
                </div>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
                <span>{applications} applications</span>
                <span>Goal: {goal}</span>
            </div>
        </div>
    );
}

function ActivityItem({ message, timestamp, icon }) {
    return (
        <div className="flex">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium">{message}</p>
                <p className="text-xs text-muted-foreground">{timestamp}</p>
            </div>
        </div>
    );
}


