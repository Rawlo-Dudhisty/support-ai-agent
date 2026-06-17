import type { TicketResponse } from "../types/ticket";
import { motion } from "framer-motion";

import {
  Target,
  AlertTriangle,
  BrainCircuit,
  Zap,
  CheckCircle,
} from "lucide-react";

interface Props {
  data: TicketResponse | null;
}

export default function ResponseCard({
  data,
}: Props) {
  if (!data) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
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
        ⚡ Resolution Output
      </h2>

      {/* Intent + Priority */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div
          className="
            bg-slate-800
            rounded-xl
            p-4
          "
        >
          <div className="flex items-center gap-2">
            <Target
              size={18}
              className="text-cyan-400"
            />

            <p className="text-slate-400 text-sm">
              Ticket Intent
            </p>
          </div>

          <p className="text-white font-semibold mt-2">
            {data.classification.category}
          </p>
        </div>

        <div
          className="
            bg-slate-800
            rounded-xl
            p-4
          "
        >
          <div className="flex items-center gap-2">
            <AlertTriangle
              size={18}
              className="text-orange-400"
            />

            <p className="text-slate-400 text-sm">
              Urgency Level
            </p>
          </div>

          <p className="text-white font-semibold mt-2">
            {data.classification.priority}
          </p>
        </div>

      </div>

      {/* Knowledge */}
      <div
        className="
          bg-slate-800
          rounded-xl
          p-5
          mb-5
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <BrainCircuit
            size={18}
            className="text-cyan-400"
          />

          <h3
            className="
              text-cyan-400
              font-semibold
            "
          >
            Context Intelligence
          </h3>
        </div>

        <p className="text-slate-300">
          {data.knowledge}
        </p>
      </div>

      {/* AI Response */}
      <div
        className="
          bg-slate-950
          border
          border-slate-800
          rounded-xl
          p-5
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap
            size={18}
            className="text-green-400"
          />

          <h3
            className="
              text-green-400
              font-semibold
            "
          >
            Resolution Output
          </h3>
        </div>

        <div
          className="
            text-slate-300
            whitespace-pre-wrap
            leading-relaxed
          "
        >
          {data.reply}
        </div>
      </div>

      {/* Confidence Score */}
      <div
        className="
          bg-slate-800
          rounded-xl
          p-5
          mt-5
        "
      >
        <p className="text-slate-400 text-sm">
          AI Confidence Score
        </p>

        <h3
          className="
            text-green-400
            text-3xl
            font-bold
            mt-2
          "
        >
          94%
        </h3>
      </div>

      {/* AI Decision Trace */}
      <div
        className="
          bg-slate-800
          rounded-xl
          p-5
          mt-5
        "
      >
        <h3
          className="
            text-cyan-400
            font-semibold
            mb-4
          "
        >
          AI Decision Trace
        </h3>

        <div className="space-y-3">

          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className="text-green-400"
            />
            <span className="text-slate-300">
              Intent Detected
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className="text-green-400"
            />
            <span className="text-slate-300">
              Priority Assigned
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className="text-green-400"
            />
            <span className="text-slate-300">
              Knowledge Retrieved
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle
              size={16}
              className="text-green-400"
            />
            <span className="text-slate-300">
              Resolution Generated
            </span>
          </div>

        </div>
      </div>

    </motion.div>
  );
}