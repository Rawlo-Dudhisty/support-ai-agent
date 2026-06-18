import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function TicketChart() {

  const data = [
    {
      status: "Open",
      count: 12,
    },
    {
      status: "In Progress",
      count: 5,
    },
    {
      status: "Resolved",
      count: 8,
    },
  ];

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      shadow-xl
      "
    >
      <h2
        className="
        text-white
        text-2xl
        font-bold
        mb-6
      "
      >
        📊 Ticket Status Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="status" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#22d3ee"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}