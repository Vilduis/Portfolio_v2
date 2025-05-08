"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
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
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl mb-8 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl text-white font-bold">
                    Desarrollador Web Jr
                  </CardTitle>
                  <p className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1">
                    Neon House Led
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 text-gray-300 border-white/10 bg-white/5"
                  >
                    <Calendar size={14} />
                    <span>Dic 2024 - Mar 2025</span>
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
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Proyecto: ContigoVoy
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Optimicé el panel de administración, mejorando su
                        rendimiento, accesibilidad y experiencia de usuario
                        mediante el uso de HTML5, CSS3, JavaScript y Bootstrap.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Corregí errores en el backend (PHP/MySQL) que impedían
                        la correcta comunicación con el frontend.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Diseñé formularios y elementos de navegación, logrando
                        una interfaz más intuitiva y responsive.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Participé en la migración tecnológica hacia Next.js,
                        TypeScript, Tailwind CSS, Laravel y MySQL.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Integré componentes reutilizables utilizando librerías
                        como HeroUI y Shadcn, e implementé animaciones para
                        mejorar la interactividad.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Proyecto: AsdenPeru
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Lideré el desarrollo de la página web utilizando
                        Next.js, TypeScript, Tailwind CSS, Laravel y MySQL.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Diseñé interfaces modernas y responsive, asegurando una
                        experiencia de usuario óptima.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        size={18}
                        className="text-indigo-400 mr-2 mt-1 flex-shrink-0"
                      />
                      <span>
                        Facilité integraciones con APIs para mejorar la
                        funcionalidad del sitio web.
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
