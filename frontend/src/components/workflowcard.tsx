import {
  Target,
  BrainCircuit,
  Zap,
  CheckCircle
} from "lucide-react";

interface Props {
  status: string;
}

export default function WorkflowCard({
  status,
}: Props) {

  const completed =
    status.includes("Complete");

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
        ⚡ SupportAI Pipeline
      </h2>

      <div className="space-y-4">

        <div
          className={`
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            transition-all
            ${
              status.includes("Classifier") ||
              completed
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-slate-800 text-white"
            }
          `}
        >
          <Target size={20} />

          <div>
            <p className="font-semibold">
              Intent Engine
            </p>

            <p className="text-xs opacity-70">
              Detect customer intent
            </p>
          </div>
        </div>

        <div className="text-center text-slate-500">
          ↓
        </div>

        <div
          className={`
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            transition-all
            ${
              status.includes("Knowledge") ||
              completed
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-slate-800 text-white"
            }
          `}
        >
          <BrainCircuit size={20} />

          <div>
            <p className="font-semibold">
              Context Engine
            </p>

            <p className="text-xs opacity-70">
              Retrieve knowledge
            </p>
          </div>
        </div>

        <div className="text-center text-slate-500">
          ↓
        </div>

        <div
          className={`
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            transition-all
            ${
              status.includes("Gemini") ||
              completed
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-slate-800 text-white"
            }
          `}
        >
          <Zap size={20} />

          <div>
            <p className="font-semibold">
              Resolution Engine
            </p>

            <p className="text-xs opacity-70">
              Generate AI response
            </p>
          </div>
        </div>

      </div>

      <div
        className="
        mt-8
        bg-slate-800
        rounded-xl
        p-4
      "
      >
        <p className="text-slate-400 text-sm">
          Current Status
        </p>

        <div
          className="
          flex
          items-center
          gap-2
          mt-2
          text-cyan-400
          font-semibold
        "
        >
          <CheckCircle size={18} />

          {status}
        </div>
      </div>

      <div
        className="
        mt-4
        bg-slate-800
        rounded-xl
        p-4
      "
      >
        <p className="text-slate-400 text-sm">
          AI Confidence
        </p>

        <h3
          className="
          text-green-400
          text-2xl
          font-bold
          mt-1
        "
        >
          94%
        </h3>
      </div>

    </div>
  );
}