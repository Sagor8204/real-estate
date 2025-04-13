"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "March 15, 2025", views: 1 },
  { date: "March 17, 2025", views: 2 },
  { date: "March 18, 2025", views: 0 },
  { date: "March 19, 2025", views: 2 },
  { date: "March 21, 2025", views: 6 },
  { date: "March 24, 2025", views: 5 },
  { date: "March 25, 2025", views: 0 },
  { date: "March 27, 2025", views: 0 },
  { date: "March 28, 2025", views: 0 },
  { date: "April 1, 2025", views: 2 },
  { date: "April 2, 2025", views: 3 },
  { date: "April 10, 2025", views: 5 },
];

export default function PropertyViewsChart() {
  return (
    <div className="w-full h-[360px] pt-2 bg-white rounded-md shadow">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, left: 0, bottom: 40 }}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            interval={0}
            angle={-40}
            textAnchor="end"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            domain={[1, 6]}
            ticks={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0]}
            tick={{ fontSize: 12 }}
            allowDecimals={true}
            tickFormatter={(value) => value.toFixed(1)}
            interval={0}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ top: -10 }} />
          <Bar
            dataKey="views"
            name="Property Views"
            fill="#d4d4d4"
            barSize={28}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
