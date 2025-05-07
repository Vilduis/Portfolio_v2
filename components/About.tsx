"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl font-bold mb-12 text-center">
            Sobre Mí
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="relative z-10"
            >
              <div className="relative z-20 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Vilder trabajando"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements — mueve este bloque dentro del contenedor relativo */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-indigo-500/30 rounded-2xl z-0 hidden sm:block"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pink-500/30 rounded-2xl z-0 hidden sm:block"></div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Desarrollador Web con enfoque en{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  experiencias digitales
                </span>
              </h3>

              <p className="text-gray-300">
                Soy un desarrollador web con experiencia en React, Spring Boot,
                Next.js y Express. He contribuido en proyectos enfocados en el
                diseño de interfaces y la lógica de servidor.
              </p>

              <p className="text-gray-300">
                Mi formación académica en Ingeniería de Sistemas de Información
                me ha proporcionado una sólida base técnica, mientras que mi
                experiencia práctica me ha permitido desarrollar habilidades en
                la creación de aplicaciones web modernas y eficientes.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <ChevronRight
                    size={20}
                    className="text-indigo-400 mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-300">
                    Busco prácticas profesionales para aplicar mis conocimientos
                    y potenciar mi crecimiento técnico.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight
                    size={20}
                    className="text-indigo-400 mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-300">
                    Me apasiona el desarrollo web y estoy constantemente
                    aprendiendo nuevas tecnologías y metodologías.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight
                    size={20}
                    className="text-indigo-400 mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-300">
                    Disfruto trabajando en equipo y aportando soluciones
                    creativas a problemas complejos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
