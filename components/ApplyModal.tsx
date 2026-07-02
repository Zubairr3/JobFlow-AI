"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ApplyModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submit() {
    if (!name || !email) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Application Submitted Successfully!");

    setName("");
    setEmail("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-xl bg-blue-600 px-8 py-4 hover:bg-blue-700 transition">
          Apply Now
        </button>
      </DialogTrigger>

      <DialogContent className="bg-slate-900 border-slate-800 text-white">

        <DialogHeader>
          <DialogTitle className="text-2xl">
            Apply for Job
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-5">

          <div>
            <label htmlFor="name" className="block mb-2">
              Full Name
            </label>

            <input
              id="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full rounded-lg bg-slate-800 p-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-lg bg-slate-800 p-3"
            />
          </div>

          <div>
            <label htmlFor="resume" className="block mb-2">
              Resume
            </label>

            <input
              id="resume"
              type="file"
              className="w-full rounded-lg bg-slate-800 p-3"
            />
          </div>

          <button
            onClick={submit}
            className="w-full rounded-xl bg-blue-600 py-3 hover:bg-blue-700"
          >
            Submit Application
          </button>

        </div>

      </DialogContent>
    </Dialog>
  );
}