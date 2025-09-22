'use client';
import { Area, Tooltip, XAxis, YAxis, AreaChart } from "recharts";

type Point = { name: string; uv: number; pv: number };

export default function AreaCharts({ data }: { data: Point[] }) {

    return (
        <>
            <AreaChart width={560} height={190} data={data}
                margin={{ top: 10, right: 60, left: -28, bottom: -8 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#946FF0" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#946FF0" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C4ABFF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#F8F6FF" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"
                    tick={{ fontSize: 10 }}
                />
                <YAxis
                    tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </>
    )
}