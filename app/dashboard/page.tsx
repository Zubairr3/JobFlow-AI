"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Briefcase,
  FileText,
  Building2,
  BarChart3,
} from "lucide-react";

export default function Dashboard() {
  const [role, setRole] = useState<"jobseeker" | "recruiter">("jobseeker");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 p-8 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold">Dashboard</h1>

          <p className="mt-3 text-slate-400">
            Manage your career or hiring process.
          </p>

          {/* Role Switch */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setRole("jobseeker")}
              className={`rounded-xl px-6 py-3 ${
                role === "jobseeker" ? "bg-blue-600" : "bg-slate-800"
              }`}
            >
              Job Seeker
            </button>

            <button
              onClick={() => setRole("recruiter")}
              className={`rounded-xl px-6 py-3 ${
                role === "recruiter" ? "bg-blue-600" : "bg-slate-800"
              }`}
            >
              Recruiter
            </button>
          </div>

          {/* Profile Completion */}
          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex justify-between">
              <span>Profile Completion</span>
              <span>92%</span>
            </div>

            <div className="mt-3 h-3 rounded-full bg-slate-700">
              <div className="h-3 w-[92%] rounded-full bg-blue-500"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {role === "jobseeker" ? (
              <>
                <Card icon={<FileText />} title="Applications" value="18" />
                <Card icon={<Briefcase />} title="Saved Jobs" value="12" />
                <Card icon={<Building2 />} title="Interviews" value="5" />
                <Card icon={<BarChart3 />} title="Profile Score" value="92%" />
              </>
            ) : (
              <>
                <Card icon={<Briefcase />} title="Active Jobs" value="14" />
                <Card icon={<Users />} title="Applicants" value="482" />
                <Card icon={<Building2 />} title="Companies" value="3" />
                <Card icon={<BarChart3 />} title="Hiring Rate" value="87%" />
              </>
            )}
          </div>

          {/* Dynamic Section */}
          {role === "jobseeker" ? (
            <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">Recent Activity</h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>✅ Applied to Frontend Developer at Google</li>
                <li>⭐ Saved AI Engineer at OpenAI</li>
                <li>📅 Interview scheduled with Microsoft</li>
                <li>📄 Resume updated successfully</li>
              </ul>
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">Recent Applicants</h2>

              <table className="mt-6 w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 text-left">Candidate</th>
                    <th className="text-left">Role</th>
                    <th className="text-left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="py-4">Rahul Sharma</td>
                    <td>Frontend Developer</td>
                    <td className="text-green-400">Shortlisted</td>
                  </tr>

                  <tr>
                    <td className="py-4">Anjali Verma</td>
                    <td>AI Engineer</td>
                    <td className="text-yellow-400">Review</td>
                  </tr>

                  <tr>
                    <td className="py-4">Arjun Reddy</td>
                    <td>Backend Engineer</td>
                    <td className="text-blue-400">Interview</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <div className="text-blue-500">{icon}</div>

      <h2 className="mt-5 text-3xl font-bold">{value}</h2>

      <p className="mt-2 text-slate-400">{title}</p>
    </div>
  );
}