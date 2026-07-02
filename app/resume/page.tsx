"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "SQL",
  ];

  const missing = [
    "Docker",
    "AWS",
    "CI/CD",
    "Kubernetes",
  ];

  const suggestions = [
    "Add measurable achievements.",
    "Include GitHub portfolio link.",
    "Improve professional summary.",
    "Mention REST APIs.",
    "Add certifications.",
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        <section className="mx-auto max-w-6xl px-6 py-16">

          <div className="text-center">

            <div className="inline-flex items-center rounded-full bg-blue-600/20 px-5 py-2">

              <Sparkles className="mr-2 h-4 w-4" />

              AI Resume Analyzer

            </div>

            <h1 className="mt-6 text-5xl font-bold">

              Improve Your Resume

            </h1>

            <p className="mt-4 text-slate-400">

              Upload your resume and receive an AI-powered ATS analysis.

            </p>

          </div>

          {/* Upload */}

          <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <label
              htmlFor="resume"
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 py-16 transition hover:border-blue-500"
            >

              <Upload className="mb-4 h-14 w-14 text-blue-500" />

              <h2 className="text-2xl font-semibold">

                Upload Resume

              </h2>

              <p className="mt-2 text-slate-400">

                PDF or DOCX

              </p>

              {file && (
                <div className="mt-6 flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2">

                  <FileText className="h-5 w-5 text-blue-400" />

                  <span>{file.name}</span>

                </div>
              )}

            </label>

            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
            />

          </div>

          {/* ATS */}

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h2 className="text-2xl font-bold">

                ATS Score

              </h2>

              <div className="mt-8 text-center">

                <h3 className="text-7xl font-bold text-green-400">

                  92%

                </h3>

                <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-800">

                  <div className="h-full w-[92%] rounded-full bg-green-500" />

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h2 className="text-2xl font-bold">

                AI Suggestions

              </h2>

              <div className="mt-6 space-y-4">

                {suggestions.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-slate-800 p-4"
                  >

                    <CheckCircle className="text-green-400" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Skills */}

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h2 className="text-2xl font-bold">

                Skills Detected

              </h2>

              <div className="mt-6 flex flex-wrap gap-3">

                {skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full bg-green-500/20 px-4 py-2 text-green-400"
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

              <h2 className="text-2xl font-bold">

                Missing Keywords

              </h2>

              <div className="mt-6 flex flex-wrap gap-3">

                {missing.map((item) => (

                  <span
                    key={item}
                    className="rounded-full bg-red-500/20 px-4 py-2 text-red-400"
                  >

                    <AlertCircle className="mr-2 inline h-4 w-4" />

                    {item}

                  </span>

                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}