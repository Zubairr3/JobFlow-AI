"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const updateRole = () => {
      setRole(localStorage.getItem("role"));
    };

    // initial load
    updateRole();

    // listen for changes from other tabs
    window.addEventListener("storage", updateRole);

    // ALSO listen for same-tab updates (IMPORTANT FIX)
    const interval = setInterval(updateRole, 500);

    return () => {
      window.removeEventListener("storage", updateRole);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-slate-950 text-white">

      {/* LOGO */}
      <Link href="/" className="text-xl font-bold">
        JobFlow AI
      </Link>

      <div className="flex items-center gap-4">

        {/* ROLE BASED BUTTON */}
        {role === "recruiter" ? (
          <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
            + Post Job
          </button>
        ) : (
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Browse Jobs
          </button>
        )}

        {/* LOGIN MODAL */}
        <LoginModal />

      </div>
    </nav>
  );
}