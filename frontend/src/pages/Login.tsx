import { useState } from "react";
import { login } from "../services/authService";
// removed unused useNavigate import


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
  try {
    const result = await login(
      email,
      password
    );

    console.log(
      "LOGIN RESPONSE:",
      result
    );

    localStorage.setItem(
      "token",
      result.access_token
    );

    console.log(
      "TOKEN SAVED:",
      localStorage.getItem("token")
    );

    window.location.href =
      "/dashboard";

    } catch (error: any) {
    console.error(
      "LOGIN ERROR:",
      error.response?.data
    );

    console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-slate-900 p-8 rounded-xl w-96">

        <h1 className="text-white text-2xl mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-3 rounded text-white"
        >
          Login
        </button>

      </div>
    </div>
  );
}