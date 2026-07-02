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
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹18 LPA",
    type: "Remote",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹22 LPA",
    type: "Hybrid",
  },
  {
    id: 3,
    title: "AI Engineer",
    company: "OpenAI",
    location: "Remote",
    salary: "₹35 LPA",
    type: "Remote",
  },
  {
    id: 4,
    title: "Cloud Engineer",
    company: "Amazon",
    location: "Chennai",
    salary: "₹28 LPA",
    type: "Hybrid",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Pune",
    salary: "₹16 LPA",
    type: "On Site",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Netflix",
    location: "Remote",
    salary: "₹40 LPA",
    type: "Remote",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<JobType>("All");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  // Load saved jobs safely
  useEffect(() => {
    const saved = localStorage.getItem("savedJobs");
    if (saved) {
      try {
        setSavedJobs(JSON.parse(saved));
      } catch {
        setSavedJobs([]);
      }
    }
  }, []);

  // Save to localStorage
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
          Discover opportunities from the world's leading companies.
        </p>

        {/* Search */}
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <div className="md:col-span-3 flex rounded-2xl border border-slate-700 bg-slate-900 p-3">
            <Search className="ml-2 mt-3 text-slate-400" />

            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 bg-transparent px-4 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* FIXED SELECT */}
          <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-4">
            <Filter className="mr-3 text-slate-400" />

            <select
              value={type}
              onChange={(e) => setType(e.target.value as JobType)}
              className="w-full bg-transparent outline-none text-white"
            >
              <option value="All" className="text-black">All</option>
              <option value="Remote" className="text-black">Remote</option>
              <option value="Hybrid" className="text-black">Hybrid</option>
              <option value="On Site" className="text-black">On Site</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-slate-400">{filteredJobs.length} Jobs Found</p>

          <div className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
            ⭐ Saved Jobs: {savedJobs.length}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={`/jobs/${job.id}`}
                  className="block rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 font-bold">
                      {job.company.charAt(0)}
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSave(job.id);
                      }}
                      className="rounded-lg border border-slate-700 p-2 hover:bg-slate-800"
                    >
                      {savedJobs.includes(job.id) ? (
                        <BookmarkCheck className="h-5 w-5 text-blue-500" />
                      ) : (
                        <Bookmark className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">{job.title}</h2>

                  <div className="mt-2 flex items-center text-slate-400">
                    <Building className="mr-2 h-4 w-4" />
                    {job.company}
                  </div>

                  <div className="mt-3 flex items-center text-slate-400">
                    <MapPin className="mr-2 h-4 w-4" />
                    {job.location}
                  </div>

                  <div className="mt-3 flex items-center text-slate-400">
                    <Briefcase className="mr-2 h-4 w-4" />
                    {job.type}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-bold">{job.salary}</span>

                    <span className="rounded-xl bg-blue-600 px-4 py-2">
                      View Job
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 rounded-3xl border border-slate-800 bg-slate-900 p-16 text-center">
              <Search className="mx-auto mb-5 h-14 w-14 text-slate-500" />

              <h2 className="text-3xl font-bold">No Jobs Found</h2>

              <p className="mt-3 text-slate-400">
                Try another search keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}