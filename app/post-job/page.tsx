"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function PostJobPage() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    skills: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setJob({ ...job, [e.target.name]: e.target.value });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();

    toast.success("Job Posted Successfully 🚀");

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "",
      skills: "",
      description: "",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-14">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <h1 className="text-4xl font-bold">
          Post New Job
        </h1>

        <p className="mt-2 text-slate-400">
          Recruiters can create new openings here.
        </p>

        <form
          onSubmit={submit}
          className="mt-8 space-y-5"
        >

          <input
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            name="company"
            placeholder="Company"
            value={job.company}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <input
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <select
            name="type"
            value={job.type}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
            aria-label="Job Type"
          >
            <option value="">Job Type</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On Site</option>
          </select>

          <input
            name="skills"
            placeholder="React, Next.js, Node..."
            value={job.skills}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <textarea
            rows={6}
            name="description"
            placeholder="Job Description"
            value={job.description}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <button
            className="w-full rounded-xl bg-blue-600 py-4 hover:bg-blue-700"
          >
            Publish Job
          </button>

        </form>

      </div>
    </main>
  );
}