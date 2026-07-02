import Link from "next/link";
import { Briefcase, Code2, Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-black mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <Briefcase />
            JobFlow AI
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Build. Apply. Get Hired Faster.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10">
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold">Company</p>
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold">Resources</p>
            <Link href="#">Help</Link>
            <Link href="#">Docs</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>

        {/* Social (replaced cleanly) */}
        <div className="flex gap-4 items-center">
          <a href="#" target="_blank" title="Website">
            <Globe />
          </a>

          <a href="#" target="_blank" title="Code / GitHub">
            <Code2 />
          </a>

          <a href="mailto:contact@jobflow.ai" title="Email">
            <Mail />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} JobFlow AI. All rights reserved.
      </div>
    </footer>
  );
}