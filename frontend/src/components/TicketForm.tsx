import { Sparkles, Send } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  description: string;
  setDescription: (value: string) => void;
  onSubmit: () => void;
}

export default function TicketForm({
  description,
  setDescription,
  onSubmit,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
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
      <div className="flex items-center gap-2 mb-5">
        <Sparkles
          size={22}
          className="text-cyan-400"
        />

        <h2
          className="
            text-white
            text-2xl
            font-bold
          "
        >
          Submit Support Request
        </h2>
      </div>

      <p
        className="
          text-slate-400
          text-sm
          mb-4
        "
      >
        Describe the customer issue and let
        SupportAI analyze, classify and
        generate a resolution automatically.
      </p>

      <textarea
        rows={7}
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        maxLength={1000}
        placeholder="Describe your issue in detail. Example: Customer payment was deducted but premium access was not activated."
        className="
          w-full
          bg-slate-950
          border
          border-slate-700
          rounded-xl
          p-4
          text-white
          resize-none
          focus:outline-none
          focus:border-cyan-500
          transition-all
        "
      />

      <div
        className="
          flex
          justify-between
          items-center
          mt-3
        "
      >
        <span
          className="
            text-slate-500
            text-sm
          "
        >
          {description.length} / 1000 characters
        </span>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          disabled={!description.trim()}
          onClick={onSubmit}
          className="
            flex
            items-center
            gap-2
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:from-cyan-400
            hover:to-blue-500
            disabled:opacity-50
            disabled:cursor-not-allowed
            px-6
            py-3
            rounded-xl
            text-white
            font-semibold
            shadow-lg
          "
        >
          <Send size={18} />
          Analyze Ticket
        </motion.button>
      </div>

      <div
        className="
          mt-5
          bg-slate-800
          rounded-xl
          p-4
        "
      >
        <p className="text-slate-400 text-sm">
          AI Pipeline
        </p>

        <div
          className="
            flex
            items-center
            gap-3
            mt-2
            text-sm
            text-slate-300
          "
        >
          <span>🎯 Intent Analysis</span>
          <span>→</span>
          <span>🧠 Knowledge Search</span>
          <span>→</span>
          <span>⚡ AI Resolution</span>
        </div>
      </div>
    </motion.div>
  );
}