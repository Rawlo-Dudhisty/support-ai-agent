import { useEffect, useState } from "react";
import { login } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (token) {
      window.location.href =
        "/dashboard";
    }
  }, []);

  const handleLogin = async () => {

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }

    try {
      const result = await login(
        email,
        password
      );

      localStorage.setItem(
        "token",
        result.access_token
      );

      window.location.href =
        "/dashboard";

    } catch (error: any) {

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail;

      if (
        message === "User not found"
      ) {
        alert(
          "Account not found. Please register first."
        );
      } else if (
        message === "Invalid password"
      ) {
        alert(
          "Incorrect password."
        );
      } else {
        alert(
          message ||
          "Login failed"
        );
      }
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
          className="w-full bg-blue-600 py-3 rounded text-white hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-slate-400 mt-4 text-center">
          Don't have an account?{" "}
          <span
            className="text-cyan-400 cursor-pointer"
            onClick={() =>
              window.location.href =
                "/register"
            }
          >
            Register
          </span>
        </p>

      </div>

    </div>
  );
}