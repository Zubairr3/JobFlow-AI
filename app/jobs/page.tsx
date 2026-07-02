"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Search,
  MapPin,
  Briefcase,
  Filter,
  Bookmark,
  BookmarkCheck,
  Building,
} from "lucide-react";

type JobType = "All" | "Remote" | "Hybrid" | "On Site";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Bangalore", salary: "₹18 LPA", type: "Remote" },
  { id: 2, title: "Backend Engineer", company: "Microsoft", location: "Hyderabad", salary: "₹22 LPA", type: "Hybrid" },
  { id: 3, title: "AI Engineer", company: "OpenAI", location: "Remote", salary: "₹35 LPA", type: "Remote" },
  { id: 4, title: "Cloud Engineer", company: "Amazon", location: "Chennai", salary: "₹28 LPA", type: "Hybrid" },
  { id: 5, title: "UI/UX Designer", company: "Adobe", location: "Pune", salary: "₹16 LPA", type: "On Site" },
  { id: 6, title: "Data Scientist", company: "Netflix", location: "Remote", salary: "₹40 LPA", type: "Remote" },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<JobType>("All");

  // ✅ FIX: lazy init prevents useEffect state issues
  const [savedJobs, setSavedJobs] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("savedJobs");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // save to localStorage safely
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  function toggleSave(id: number) {
    setSavedJobs((prev) =>
      prev.includes(id)
        ? prev.filter((jobId) => jobId !== id)
        : [...prev, id]
    );
  }

  const filteredJobs = jobs.filter((job) => {
    const searchMatch = `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const typeMatch = type === "All" || job.type === type;

    return searchMatch && typeMatch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <h1 className="text-5xl font-bold">Browse Jobs</h1>

        <p className="mt-3 text-slate-400">
          Discover opportunities from the world s leading companies.
        </p>

        {/* SEARCH */}
        <div className="mt-10 grid gap-4 md:grid-cols-4">

          <div className="md:col-span-3 flex rounded-2xl border border-slate-700 bg-slate-900 p-3">
            <Search className="ml-2 mt-3 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs..."
              className="flex-1 bg-transparent px-4 outline-none"
            />
          </div>

          {/* SELECT (FIXED ACCESSIBILITY TOO) */}
          <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-4">

            <label htmlFor="jobType" className="sr-only">
              Filter jobs
            </label>

            <Filter className="mr-3 text-slate-400" />

            <select
              id="jobType"
              value={type}
              onChange={(e) => setType(e.target.value as JobType)}
              className="w-full bg-transparent outline-none text-white"
            >
              <option value="All">All</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On Site">On Site</option>
            </select>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-slate-400">{filteredJobs.length} Jobs Found</p>

          <div className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            ⭐ Saved Jobs: {savedJobs.length}
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={`/jobs/${job.id}`}
                className="block rounded-3xl border border-slate-800 bg-slate-900 p-8"
              >
                <div className="flex justify-between">

                  <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-blue-600 font-bold">
                    {job.company.charAt(0)}
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(job.id);
                    }}
                  >
                    {savedJobs.includes(job.id) ? (
                      <BookmarkCheck className="text-blue-500" />
                    ) : (
                      <Bookmark />
                    )}
                  </button>

                </div>

                <h2 className="mt-6 text-2xl font-bold">{job.title}</h2>

                <p className="text-slate-400">{job.company}</p>
                <p className="text-slate-400">{job.location}</p>
                <p className="text-slate-400">{job.type}</p>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}