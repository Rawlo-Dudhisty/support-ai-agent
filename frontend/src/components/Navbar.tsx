import { useEffect, useState } from "react";

import {
  ShieldCheck,
  UserCircle,
  LogOut,
} from "lucide-react";

import { logout } from "../utils/auth";
import { getCurrentUser } from "../services/authService";

export default function Navbar() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token =
        localStorage.getItem("token");

      if (!token) return;

      const user =
        await getCurrentUser(token);

      setEmail(user.email);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="
      sticky
      top-0
      z-50
      bg-slate-900/95
      backdrop-blur-md
      border-b
      border-slate-800
      px-8
      py-5
      flex
      justify-between
      items-center
    "
    >
      {/* Logo */}
      <div className="flex items-center gap-4">

        <div
          className="
          bg-cyan-500/10
          p-3
          rounded-xl
          border
          border-cyan-500/20
        "
        >
          <ShieldCheck
            size={32}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h1
            className="
            text-3xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
          >
            SupportAI
          </h1>

          <p
            className="
            text-slate-400
            text-sm
          "
          >
            AI-Powered Customer Resolution Platform
          </p>
        </div>

      </div>

      {/* User */}
      <div
        className="
        flex
        items-center
        gap-4
      "
      >

        <div
          className="
          flex
          items-center
          gap-3
          bg-slate-800
          border
          border-slate-700
          px-4
          py-2
          rounded-xl
        "
        >
          <UserCircle
            size={22}
            className="text-cyan-400"
          />

          <div>
            <p
              className="
              text-xs
              text-slate-400
            "
            >
              Logged In
            </p>

            <p
              className="
              text-sm
              text-white
            "
            >
              {email}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="
            flex
            items-center
            gap-2
            bg-red-500/10
            border
            border-red-500/20
            hover:bg-red-500/20
            px-4
            py-2
            rounded-xl
            text-red-400
            transition
          "
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>
    </div>
  );
}