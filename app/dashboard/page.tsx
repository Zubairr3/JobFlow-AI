"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  FileText,
  TrendingUp,
  Calendar,
  Bell,
  Bookmark,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const recruiterStats = [
  { title: "Jobs Posted", value: "24", icon: Briefcase },
  { title: "Applicants", value: "186", icon: Users },
  { title: "Interviews", value: "42", icon: Calendar },
  { title: "Hired", value: "18", icon: TrendingUp },
];

const seekerStats = [
  { title: "Applications", value: "12", icon: FileText },
  { title: "Saved Jobs", value: "8", icon: Bookmark },
  { title: "Interviews", value: "3", icon: Calendar },
  { title: "Profile Score", value: "92%", icon: TrendingUp },
];

const hiringData = [
  { month: "Jan", jobs: 5 },
  { month: "Feb", jobs: 8 },
  { month: "Mar", jobs: 12 },
  { month: "Apr", jobs: 18 },
  { month: "May", jobs: 22 },
  { month: "Jun", jobs: 28 },
];

const applicants = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    status: "Interview",
  },
  {
    name: "Priya Verma",
    role: "Backend Engineer",
    status: "Shortlisted",
  },
  {
    name: "Aman Khan",
    role: "AI Engineer",
    status: "Applied",
  },
];

export default function DashboardPage() {
  const [mode, setMode] = useState<"recruiter" | "seeker">("recruiter");

  const stats =
    mode === "recruiter"
      ? recruiterStats
      : seekerStats;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Welcome back to JobFlow AI
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => setMode("recruiter")}
              className={`rounded-xl px-5 py-2 ${
                mode === "recruiter"
                  ? "bg-blue-600"
                  : "bg-slate-800"
              }`}
            >
              Recruiter
            </button>

            <button
              onClick={() => setMode("seeker")}
              className={`rounded-xl px-5 py-2 ${
                mode === "seeker"
                  ? "bg-blue-600"
                  : "bg-slate-800"
              }`}
            >
              Job Seeker
            </button>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-slate-400">
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                      {item.value}
                    </h2>
                  </div>

                  <Icon className="h-10 w-10 text-blue-500" />

                </div>
              </motion.div>
            );
          })}

        </div>
                {/* Charts & Activity */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {/* Hiring Chart */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">

            <h2 className="mb-6 text-2xl font-bold">
              Hiring Analytics
            </h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={hiringData}>

                <XAxis dataKey="month" stroke="#94a3b8" />

                <Tooltip />

                <Bar
                  dataKey="jobs"
                  fill="#2563eb"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* Notifications */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="mb-6 flex items-center gap-3">

              <Bell className="text-blue-500" />

              <h2 className="text-2xl font-bold">
                Notifications
              </h2>

            </div>

            <div className="space-y-5">

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="font-semibold">
                  New Applicant
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Rahul Sharma applied for Frontend Developer.
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="font-semibold">
                  Interview Scheduled
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Backend Engineer interview tomorrow.
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="font-semibold">
                  Profile Score
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Your AI profile score improved to 92%.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Recent Applicants */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Recent Applicants
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-700 text-left">

                  <th className="pb-4">
                    Candidate
                  </th>

                  <th className="pb-4">
                    Position
                  </th>

                  <th className="pb-4">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {applicants.map((person) => (

                  <tr
                    key={person.name}
                    className="border-b border-slate-800"
                  >

                    <td className="py-4">
                      {person.name}
                    </td>

                    <td className="py-4">
                      {person.role}
                    </td>

                    <td className="py-4">

                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">

                        {person.status}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
        </div>
    </main>
  );
}