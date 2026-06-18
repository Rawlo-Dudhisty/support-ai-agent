import type { Ticket } from "../types/ticket";
import { updateTicketStatus } from "../services/service";

interface Props {
  tickets: Ticket[];
}

export default function TicketTable({
  tickets,
}: Props) {

  const getPriorityColor = (
    priority: string
  ) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500/20 text-red-400";

      case "medium":
        return "bg-yellow-500/20 text-yellow-400";

      case "low":
        return "bg-green-500/20 text-green-400";

      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  const getStatusColor = (
    status: string
  ) => {
    switch (status?.toLowerCase()) {
      case "resolved":
        return "bg-green-500/20 text-green-400";

      case "in progress":
        return "bg-yellow-500/20 text-yellow-400";

      case "open":
        return "bg-blue-500/20 text-blue-400";

      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  const handleStatusUpdate =
    async (
      ticketId: number,
      status: string
    ) => {
      try {
        await updateTicketStatus(
          ticketId,
          status
        );

        window.location.reload();
      } catch (error) {
        console.error(error);
        alert(
          "Failed to update ticket status"
        );
      }
    };

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      mt-6
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
        🎫 Ticket History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr
              className="
              text-slate-400
              border-b
              border-slate-700
            "
            >
              <th className="text-left py-3">
                ID
              </th>

              <th className="text-left py-3">
                Category
              </th>

              <th className="text-left py-3">
                Priority
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Actions
              </th>

              <th className="text-left py-3">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="
                border-b
                border-slate-800
                hover:bg-slate-800/50
                transition
              "
              >
                <td className="py-4 text-white">
                  #{ticket.id}
                </td>

                <td className="py-4">
                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-cyan-500/20
                    text-cyan-400
                    text-sm
                  "
                  >
                    {ticket.category}
                  </span>
                </td>

                <td className="py-4">
                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      ${getPriorityColor(
                        ticket.priority
                      )}
                    `}
                  >
                    {ticket.priority}
                  </span>
                </td>

                <td className="py-4">
                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      ${getStatusColor(
                        ticket.status
                      )}
                    `}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td className="py-4">
                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        handleStatusUpdate(
                          ticket.id,
                          "Open"
                        )
                      }
                      className="
                      px-2
                      py-1
                      rounded
                      bg-blue-600
                      text-white
                      text-xs
                    "
                    >
                      Open
                    </button>

                    <button
                      onClick={() =>
                        handleStatusUpdate(
                          ticket.id,
                          "In Progress"
                        )
                      }
                      className="
                      px-2
                      py-1
                      rounded
                      bg-yellow-600
                      text-white
                      text-xs
                    "
                    >
                      In Progress
                    </button>

                    <button
                      onClick={() =>
                        handleStatusUpdate(
                          ticket.id,
                          "Resolved"
                        )
                      }
                      className="
                      px-2
                      py-1
                      rounded
                      bg-green-600
                      text-white
                      text-xs
                    "
                    >
                      Resolved
                    </button>

                  </div>
                </td>

                <td
                  className="
                  py-4
                  text-slate-300
                "
                >
                  {ticket.description}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}