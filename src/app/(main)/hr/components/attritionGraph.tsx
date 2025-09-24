'use client'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts'

const attritionData = [
    { name: 'IT', percent: 4.2 },
    { name: 'Sales', percent: 3.5 },
    { name: 'HR', percent: 2.8 },
    { name: 'Marketing', percent: 4.7 },
]

const colors = ['#3A3A78', '#6759CC', '#978EEE', '#BFA9FF']

export default function AttritionTrendCard({ style = 'h-48' }: { style?: string }) {
    return (
        <div className={`bg-white w-[100%] rounded-lg flex flex-col justify-end ${style}`}>
            <div className="w-[90%] h-[85%] bg-green-00 ml-3">
                <ResponsiveContainer width="90%" height="100%">
                    <BarChart data={attritionData} barCategoryGap="25%" margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12, fill: '#000000' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            domain={[1, 5]}
                            tickFormatter={(v) => `${v}%`}
                            tick={{ fontSize: 10 }}
                        />
                        <Tooltip formatter={(v: number) => `${v}%`} />
                        <Bar dataKey="percent" barSize={35} radius={[6, 6, 0, 0]} >
                            {attritionData.map((_, i) => (
                                <Cell key={`cell-${i}`} fill={colors[i]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}