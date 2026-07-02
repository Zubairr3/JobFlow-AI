"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookmarkCheck, MapPin, Briefcase } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
};

export default function SavedJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedJobs");

    if (saved) {
      setJobs(JSON.parse(saved));
    }
  }, []);

  function removeJob(id: number) {
    const updated = jobs.filter((job) => job.id !== id);

    setJobs(updated);

    localStorage.setItem("savedJobs", JSON.stringify(updated));
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        <div className="mx-auto max-w-6xl px-6 py-16">

          <h1 className="text-5xl font-bold">
            Saved Jobs
          </h1>

          <p className="mt-3 text-slate-400">
            Jobs you've bookmarked.
          </p>

          {jobs.length === 0 ? (
            <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-16 text-center">

              <BookmarkCheck className="mx-auto h-16 w-16 text-slate-500" />

              <h2 className="mt-6 text-3xl font-bold">
                No Saved Jobs
              </h2>

              <p className="mt-3 text-slate-400">
                Save jobs from the Jobs page.
              </p>

              <Link
                href="/jobs"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3"
              >
                Browse Jobs
              </Link>

            </div>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {jobs.map((job) => (

                <div
                  key={job.id}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
                >

                  <div className="flex justify-between">

                    <div>

                      <h2 className="text-2xl font-bold">
                        {job.title}
                      </h2>

                      <p className="text-slate-400">
                        {job.company}
                      </p>

                    </div>

                    <button
                      onClick={() => removeJob(job.id)}
                      className="rounded-lg bg-red-600 px-4 py-2"
                    >
                      Remove
                    </button>

                  </div>

                  <div className="mt-6 flex items-center text-slate-400">

                    <MapPin className="mr-2 h-4 w-4" />

                    {job.location}

                  </div>

                  <div className="mt-3 flex items-center text-slate-400">

                    <Briefcase className="mr-2 h-4 w-4" />

                    {job.type}

                  </div>

                  <div className="mt-6 font-bold">

                    {job.salary}

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}