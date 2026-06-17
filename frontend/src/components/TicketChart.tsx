import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function TicketChart() {

  const data = [
    { day: "Mon", tickets: 4 },
    { day: "Tue", tickets: 7 },
    { day: "Wed", tickets: 3 },
    { day: "Thu", tickets: 9 },
    { day: "Fri", tickets: 5 },
    { day: "Sat", tickets: 8 },
    { day: "Sun", tickets: 6 },
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
        📈 Ticket Trends
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={data}>
          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="tickets"
            stroke="#22d3ee"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}