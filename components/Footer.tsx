import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-br from-gray-900 to-black border-l border-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 mb-2"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Vilder Luis Sandoval Verde
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="mailto:luisvilders@gmail.com"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/vilder-luis-sandoval-verde-19230b305"
              target="_blank"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/Vilduis"
              target="_blank"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
