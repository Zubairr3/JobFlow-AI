"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  MapPin,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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

const stats = [
  { title: "Jobs", value: "12K+" },
  { title: "Companies", value: "250+" },
  { title: "Candidates", value: "8K+" },
  { title: "Success Rate", value: "95%" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location} ${job.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Navbar */}

     
      {/* Hero */}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative overflow-hidden px-6 pt-20 text-center"
      >

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative">

          <div className="mb-6 inline-flex items-center rounded-full bg-blue-600/20 px-5 py-2">

            <Sparkles className="mr-2 h-4 w-4" />

            AI Powered Career Platform

          </div>

          <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">

            Find Your

            <span className="block text-blue-500">

              Dream Job

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400">

            Discover thousands of opportunities from the world s leading
            companies with AI-powered search.

          </p>

        </div>

      </motion.section>

      {/* Search */}

      <section className="mx-auto mt-14 max-w-4xl px-6">

        <div className="flex rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-xl">

          <Search className="ml-3 mt-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search jobs, companies or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent px-4 outline-none"
          />

          <button className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700">

            Search

          </button>

        </div>

      </section>

      {/* Stats */}

      <section className="mx-auto mt-16 max-w-6xl px-6">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
            >

              <h2 className="text-4xl font-bold text-blue-500">

                {item.value}

              </h2>

              <p className="mt-3 text-slate-400">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Jobs */}

      <section className="mx-auto mt-20 max-w-7xl px-6 pb-24">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold">

              Featured Jobs

            </h2>

            <p className="mt-2 text-slate-400">

              {filteredJobs.length} Jobs Available

            </p>

          </div>

          <Link
            href="/jobs"
            className="flex items-center gap-2 text-blue-400"
          >

            View All

            <ArrowRight size={18} />

          </Link>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredJobs.map((job, index) => (

            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .08 }}
            >

              <Link
                href={`/jobs/${job.id}`}
                className="block rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold">

                  {job.company.charAt(0)}

                </div>

                <h3 className="mt-6 text-xl font-bold">

                  {job.title}

                </h3>

                <p className="mt-2 text-slate-400">

                  {job.company}

                </p>

                <div className="mt-4 flex items-center text-slate-400">

                  <MapPin className="mr-2 h-4 w-4" />

                  {job.location}

                </div>

                <div className="mt-4 flex items-center text-slate-400">

                  <Briefcase className="mr-2 h-4 w-4" />

                  {job.type}

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="font-semibold">

                    {job.salary}

                  </span>

                  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">

                    Apply

                  </span>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>
      {/* CTA Section */}

      {/* CTA Section */}

      <section className="mx-auto mt-24 max-w-6xl px-6 pb-20">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-indigo-600 p-14 text-center">
          <h2 className="text-5xl font-bold">
            Ready to Start Your Career?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Join thousands of professionals using JobFlow AI.
          </p>

          <Link
            href="/jobs"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Explore Jobs
          </Link>
        </div>
      </section>

    </main>

    <Footer />
  </>
);
}
