import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-gradient-to-br
        from-slate-900
        to-slate-800
        border
        border-slate-700
        rounded-2xl
        p-6
        shadow-xl
        hover:border-cyan-500/40
        transition-all
      "
    >
      <div className="flex justify-between items-start">

        <div>
          <p
            className="
              text-slate-400
              text-sm
              uppercase
              tracking-wider
            "
          >
            {title}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              mt-3
            "
          >
            {value}
          </h2>
        </div>

        <div
          className="
            p-3
            rounded-xl
            bg-slate-800
            border
            border-slate-700
          "
        >
          <Icon
            size={28}
            className={color}
          />
        </div>

      </div>
    </motion.div>
  );
}