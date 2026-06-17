import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  Ticket,
  AlertTriangle,
  Activity,
  BarChart3,
} from "lucide-react";

import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import TicketForm from "../components/TicketForm";
import WorkflowCard from "../components/workflowcard";
import ResponseCard from "../components/ResponseCard";
import TicketTable from "../components/TicketTable";
import TicketChart from "../components/TicketChart";

import {
  processTicket,
  getTickets,
} from "../services/service";

import type {
  Ticket as TicketType,
  TicketResponse,
} from "../types/ticket";

export default function Dashboard() {
  const [description, setDescription] =
    useState("");

  const [response, setResponse] =
    useState<TicketResponse | null>(null);

  const [tickets, setTickets] =
    useState<TicketType[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState("Waiting for ticket...");

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const data = await getTickets();
      setTickets(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      setStatus(
        "🤖 Classifier Agent Running..."
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      setStatus(
        "📚 Knowledge Agent Searching..."
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      setStatus(
        "✍️ Gemini Agent Generating Reply..."
      );

      const result =
        await processTicket({
          description,
        });

      setResponse(result);

      await fetchTickets();

      setStatus(
        "✅ Ticket Processed Successfully"
      );

      setDescription("");

    } catch (error) {
      console.error(error);

      setStatus(
        "❌ Processing Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const totalTickets =
    tickets.length;

  const highPriority =
    tickets.filter(
      (t) =>
        t.priority.toLowerCase() ===
        "high"
    ).length;

  const mediumPriority =
    tickets.filter(
      (t) =>
        t.priority.toLowerCase() ===
        "medium"
    ).length;

  const lowPriority =
    tickets.filter(
      (t) =>
        t.priority.toLowerCase() ===
        "low"
    ).length;

  return (
    <div className="min-h-screen bg-slate-950">

      {loading && (
        <div
          className="
          fixed
          inset-0
          bg-black/70
          flex
          items-center
          justify-center
          z-50
        "
        >
          <div className="text-center">

            <div
              className="
              animate-spin
              rounded-full
              h-20
              w-20
              border-b-4
              border-cyan-400
              mx-auto
            "
            />

            <p
              className="
              text-white
              mt-6
              text-lg
              font-semibold
            "
            >
              SupportAI Processing...
            </p>

          </div>
        </div>
      )}

      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          px-6
          pt-8
        "
      >
        <div
          className="
            bg-gradient-to-r
            from-cyan-500/10
            to-blue-500/10
            border
            border-cyan-500/20
            rounded-2xl
            p-8
            mb-8
          "
        >
          <h1
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            SupportAI Command Center
          </h1>

          <p
            className="
              text-slate-400
              mt-3
              text-lg
            "
          >
            Multi-Agent AI System for
            Customer Support Automation
          </p>
        </div>
      </motion.div>

      <div className="px-6 pb-6">

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5 mb-8">

          <StatsCard
            title="Total Tickets"
            value={totalTickets.toString()}
            icon={Ticket}
            color="text-cyan-400"
          />

          <StatsCard
            title="High Priority"
            value={highPriority.toString()}
            icon={AlertTriangle}
            color="text-red-400"
          />

          <StatsCard
            title="Medium Priority"
            value={mediumPriority.toString()}
            icon={Activity}
            color="text-yellow-400"
          />

          <StatsCard
            title="Low Priority"
            value={lowPriority.toString()}
            icon={BarChart3}
            color="text-green-400"
          />

        </div>

        {/* Form + Workflow */}
        <div className="grid grid-cols-2 gap-6 mb-8">

          <TicketForm
            description={description}
            setDescription={setDescription}
            onSubmit={handleSubmit}
          />

          <WorkflowCard
            status={status}
          />

        </div>

        {/* AI Response */}
        <div className="mb-8">
          <ResponseCard
            data={response}
          />
        </div>

        {/* Ticket History */}
        <TicketTable
          tickets={tickets}
        />
        <div className="mb-8">
          <TicketChart />
        </div>
      </div>
    </div>
  );
}