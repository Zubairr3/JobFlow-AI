"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyModal from "@/components/ApplyModal";

import {
  MapPin,
  Briefcase,
  IndianRupee,
  Clock,
  Bookmark,
  Building2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹18 LPA",
    type: "Remote",
    experience: "2+ Years",
    description:
      "Join Google's engineering team to build scalable and beautiful web applications using React, Next.js and TypeScript.",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Git",
    ],

    responsibilities: [
      "Develop modern React applications",
      "Work closely with UI/UX designers",
      "Write reusable components",
      "Optimize application performance",
      "Review code and mentor juniors",
    ],

    benefits: [
      "Health Insurance",
      "Flexible Working Hours",
      "Remote Work",
      "Stock Options",
      "Annual Bonus",
    ],
  },

  {
    id: 2,
    title: "Backend Engineer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹22 LPA",
    type: "Hybrid",
    experience: "3+ Years",

    description:
      "Build scalable backend systems using Node.js and cloud technologies.",

    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
    ],

    responsibilities: [
      "Develop APIs",
      "Database Design",
      "Authentication",
      "Deploy Services",
      "Performance Optimization",
    ],

    benefits: [
      "Health Insurance",
      "Free Lunch",
      "Bonus",
      "Hybrid Work",
    ],
  },

  {
    id: 3,
    title: "AI Engineer",
    company: "OpenAI",
    location: "Remote",
    salary: "₹35 LPA",
    type: "Remote",
    experience: "4+ Years",

    description:
      "Work on cutting-edge AI products and large language model applications.",

    skills: [
      "Python",
      "Machine Learning",
      "LLMs",
      "PyTorch",
      "Docker",
    ],

    responsibilities: [
      "Train AI Models",
      "Prompt Engineering",
      "Model Evaluation",
      "Deploy AI Services",
    ],

    benefits: [
      "Remote",
      "High Salary",
      "Learning Budget",
      "Equipment",
    ],
  },
];

export default async function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job =
    jobs.find((item) => item.id === Number(id)) || jobs[0];

  const similarJobs = jobs.filter((j) => j.id !== job.id);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <Link
            href="/jobs"
            className="mb-10 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={18} />
            Back to Jobs
          </Link>

          <div className="grid gap-10 lg:grid-cols-3">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-10"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-bold">

                  {job.company.charAt(0)}

                </div>

                <div>

                  <h1 className="text-4xl font-bold">

                    {job.title}

                  </h1>

                  <p className="mt-2 text-lg text-slate-400">

                    {job.company}

                  </p>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-slate-300">

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee size={18} />
                  {job.salary}
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {job.experience}
                </div>

              </div>

              <section className="mt-10">

                <h2 className="text-2xl font-bold">
                  Job Description
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  {job.description}
                </p>

              </section>

              <section className="mt-10">

                <h2 className="text-2xl font-bold">
                  Skills Required
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">

                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </section>

              <section className="mt-10">

                <h2 className="text-2xl font-bold">
                  Responsibilities
                </h2>

                <div className="mt-5 space-y-4">

                  {job.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="text-green-400" />
                      {item}
                    </div>
                  ))}

                </div>

              </section>

              <section className="mt-10">

                <h2 className="text-2xl font-bold">
                  Benefits
                </h2>

                <div className="mt-5 space-y-4">

                  {job.benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="text-blue-400" />
                      {item}
                    </div>
                  ))}

                </div>

              </section>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-fit rounded-3xl border border-slate-800 bg-slate-900 p-8 lg:sticky lg:top-24"
            >
              <h2 className="text-2xl font-bold">
                Job Overview
              </h2>

              <div className="mt-8 space-y-5">

                <Info title="Company" value={job.company} />

                <Info title="Location" value={job.location} />

                <Info title="Salary" value={job.salary} />

                <Info title="Experience" value={job.experience} />

                <Info title="Job Type" value={job.type} />

              </div>

              <div className="mt-10 space-y-4">

                <ApplyModal />

                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 hover:bg-slate-800">
                  <Bookmark size={18} />
                  Save Job
                </button>

              </div>

            </motion.div>

          </div>

          {/* Similar Jobs */}

          <section className="mt-20">

            <h2 className="mb-8 text-3xl font-bold">
              Similar Jobs
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

              {similarJobs.map((item) => (
                <Link
                  key={item.id}
                  href={`/jobs/${item.id}`}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 font-bold">

                      {item.company.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="text-slate-400">
                        {item.company}
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 flex items-center gap-2 text-slate-400">

                    <Building2 size={16} />

                    {item.location}

                  </div>

                </Link>
              ))}

            </div>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b border-slate-800 pb-3">
      <span className="text-slate-400">{title}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}