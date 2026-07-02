"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function LoginModal() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"candidate" | "recruiter">("candidate");

  function handleSubmit() {
    if (!email || !password || (mode === "signup" && !name)) {
      toast.error("Please fill all fields");
      return;
    }

    localStorage.setItem("role", role);

    toast.success(
      mode === "login"
        ? "Welcome back! 🎉"
        : "Account created! Start your tech journey 🚀"
    );

    setEmail("");
    setPassword("");
    setName("");

    // ❗ IMPORTANT: we DO NOT rely on state closing
    // DialogClose will handle it
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700">
          Login
        </button>
      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white border-slate-800">

        <DialogHeader>
          <DialogTitle>
            {mode === "login" ? "Login" : "Create Account"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-5 space-y-4">

          {mode === "signup" && (
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-slate-800 rounded-lg"
            />
          )}

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-slate-800 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-slate-800 rounded-lg"
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "candidate" | "recruiter")
            }
            className="w-full p-3 bg-slate-800 rounded-lg"
          >
            <option value="candidate">Candidate</option>
            <option value="recruiter">Recruiter</option>
          </select>

          {/* ✅ FIX: DialogClose WRAPS BUTTON */}
          <DialogClose asChild>
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700"
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </DialogClose>

          <p className="text-center text-sm text-slate-400">
            {mode === "login" ? (
              <button
                onClick={() => setMode("signup")}
                className="text-blue-400"
              >
                Start your tech journey 🚀
              </button>
            ) : (
              <button
                onClick={() => setMode("login")}
                className="text-blue-400"
              >
                Back to Login
              </button>
            )}
          </p>

        </div>
      </DialogContent>
    </Dialog>
  );
}