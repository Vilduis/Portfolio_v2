"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, MapPin, GraduationCap } from "lucide-react";

export default function Education() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-lg hidden sm:block">
                    <GraduationCap size={36} className="text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white font-bold">
                      Ingeniería de Sistemas de Información
                    </CardTitle>
                    <p className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1">
                      Universidad Peruana de Ciencias Aplicadas
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 text-gray-300 border-white/10 bg-white/5"
                  >
                    <Calendar size={14} />
                    <span>Ago 2021 - Actualidad</span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 text-gray-300 border-white/10 bg-white/5"
                  >
                    <MapPin size={14} />
                    <span>Lima, Perú</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 border-none">
                    <Award size={14} className="mr-1" />
                    Tercio Superior
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-none">
                    <Award size={14} className="mr-1" />
                    Becario Pronabec Beca 18
                  </Badge>
                  <Badge className="bg-pink-500/20 text-pink-400 hover:bg-pink-500/30 border-none">
                    <GraduationCap size={14} className="mr-1" />
                    8vo Ciclo
                  </Badge>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-5 rounded-lg">
                  <h3 className="text-lg text-white font-semibold mb-3">
                    Logros Académicos
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Award
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Mantenimiento constante en el tercio superior de la
                        carrera.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Participación en proyectos académicos con enfoque en
                        desarrollo web y sistemas de información.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Award
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Desarrollo de habilidades técnicas y blandas a través de
                        trabajos colaborativos y presentaciones.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
