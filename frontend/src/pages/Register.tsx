import { useState } from "react";
import { register } from "../services/authService";

export default function Register() {
  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async () => {

    if (!username.trim()) {
      alert("Please enter username");
      return;
    }

    if (!email.trim()) {
      alert("Please enter email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter password");
      return;
    }

    try {
      await register(
        username,
        email,
        password
      );

      alert(
        "Registration successful. Please login."
      );

      window.location.href =
        "/login";

    } catch (error: unknown) {

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error
      ) {

        const response = (
          error as {
            response?: {
              data?: {
                detail?: string;
                message?: string;
              };
            };
          }
        ).response;

        alert(
          response?.data?.detail ||
          response?.data?.message ||
          "Registration failed"
        );

      } else {
        alert(
          "Registration failed"
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <div className="bg-slate-900 p-8 rounded-xl w-96">

        <h1 className="text-white text-2xl mb-6">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

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
          onClick={handleRegister}
          className="w-full bg-green-600 py-3 rounded text-white hover:bg-green-700"
        >
          Register
        </button>

        <p className="text-slate-400 mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-cyan-400 cursor-pointer"
            onClick={() =>
              window.location.href =
                "/login"
            }
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}