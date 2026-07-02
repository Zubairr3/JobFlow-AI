"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  MapPin,
  Briefcase,
  Star,
  ArrowRight,
} from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Google",
    location: "Bangalore",
    jobs: 24,
    rating: 4.9,
    logo: "G",
  },
  {
    id: 2,
    name: "Microsoft",
    location: "Hyderabad",
    jobs: 18,
    rating: 4.8,
    logo: "M",
  },
  {
    id: 3,
    name: "Amazon",
    location: "Chennai",
    jobs: 31,
    rating: 4.7,
    logo: "A",
  },
  {
    id: 4,
    name: "Netflix",
    location: "Remote",
    jobs: 12,
    rating: 4.9,
    logo: "N",
  },
  {
    id: 5,
    name: "Adobe",
    location: "Pune",
    jobs: 9,
    rating: 4.6,
    logo: "A",
  },
  {
    id: 6,
    name: "OpenAI",
    location: "Remote",
    jobs: 15,
    rating: 5.0,
    logo: "O",
  },
];

export default function CompaniesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        <section className="mx-auto max-w-7xl px-6 py-16">

          <h1 className="text-5xl font-bold">
            Top Companies
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Explore companies actively hiring talented professionals around the world.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {companies.map((company, index) => (

              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >

                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold">

                      {company.logo}

                    </div>

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      Hiring
                    </span>

                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    {company.name}
                  </h2>

                  <div className="mt-4 flex items-center text-slate-400">

                    <MapPin className="mr-2 h-4 w-4" />

                    {company.location}

                  </div>

                  <div className="mt-3 flex items-center text-slate-400">

                    <Briefcase className="mr-2 h-4 w-4" />

                    {company.jobs} Open Jobs

                  </div>

                  <div className="mt-3 flex items-center text-yellow-400">

                    <Star className="mr-2 h-4 w-4 fill-yellow-400" />

                    {company.rating}

                  </div>

                  <Link
                    href="/jobs"
                    className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
                  >
                    View Jobs
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}