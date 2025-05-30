"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import techIcons, { TechName } from "@/types/icons";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const leftTechStack: TechName[] = [
    "React",
    "Nextjs",
    "TypeScript",
    "JavaScript",
    "Tailwind",
  ];
  const rightTechStack: TechName[] = [
    "Nodejs",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Spring",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-32 min-h-screen flex flex-col justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech stack floating icons */}
        <div className="absolute left-15  top-1/4 hidden  lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="space-y-6"
          >
            {leftTechStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/30 animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Image
                  src={techIcons[tech]}
                  alt={tech}
                  width={30}
                  height={30}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right side tech stack */}
        <div className="absolute right-15 top-1/3 hidden  lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="space-y-6"
          >
            {rightTechStack.map((tech, index) => (
              <motion.div
                key={tech}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/30 animate-pulse"
                style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <Image
                  src={techIcons[tech]}
                  alt={tech}
                  width={30}
                  height={30}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-gray-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                Disponible para trabajar inmediatamente
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vilder
                </span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-medium text-gray-300">
                Desarrollador{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Full Stack
                </span>
              </h2>

              <p className="text-lg text-gray-400 max-w-xl">
                Estudiante de Ingeniería de Sistemas de Información con
                experiencia en React, Spring Boot, Next.js y Express. Apasionado
                por crear soluciones tecnológicas innovadoras.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="text-white border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/80"
                >
                  <Link
                    href="/CV_Sandoval_Stack.pdf"
                    download="CV_Sandoval_Stack"
                    className="flex items-center gap-2"
                  >
                    <Download size={18} className="mr-2" />
                    Descargar CV
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:bg-gradient-to-l">
                  <Link href="/project" className="flex items-center gap-2">
                    Ver Proyectos
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="https://www.linkedin.com/in/vilder-luis-sandoval-verde-19230b305/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={22} />
                </Link>
                <Link
                  href="https://github.com/Vilduis"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={22} />
                </Link>
                <Link
                  href="mailto:luisvilders@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={22} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Profile image with static border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full p-[5px] bg-gradient-to-r from-blue-400 to-purple-400">
                  <Image
                    src="/Luis.jpg"
                    alt="Vilder Luis Sandoval Verde"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 px-4 py-2 rounded-lg bg-amber-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full  bg-gradient-to-r from-blue-400 to-purple-400  flex items-center justify-center">
                    <span className="text-white font-bold">8</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Ciclo Académico</p>
                    <p className="text-sm font-medium">Ing. de Sistemas</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-6 -right-6 px-4 py-2 rounded-lg bg-amber-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full  bg-gradient-to-r from-blue-400 to-purple-400  flex items-center justify-center">
                    <span className="text-white font-bold">+4</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Meses de</p>
                    <p className="text-sm font-medium">Experiencia</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#about">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            >
              <ArrowDown className="text-gray-400" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
