"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Globe, Wrench, Cloud } from "lucide-react";

export default function Technniques1() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const technicalSkills = {
    languages: [
      "Python",
      "Java",
      "C#",
      "C++",
      "Javascript",
      "TypeScript",
      "PHP",
    ],
    frontend: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Angular",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    backend: ["Spring Boot", "Node.js (Express)"],
    databases: ["SQL", "MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Trello"],
    cloud: ["AWS"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-500/20 p-2 rounded-full">
                    <Code size={20} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Lenguajes
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 text-gray-300 border-white/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/20 p-2 rounded-full">
                    <Globe size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 text-gray-300 border-white/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <Server size={20} className="text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 text-gray-300 border-white/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-500/20 p-2 rounded-full">
                    <Database size={20} className="text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Bases de Datos
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.databases.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 text-gray-300 border-white/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500/20 p-2 rounded-full">
                    <Wrench size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Herramientas
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 text-gray-300 border-white/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-pink-500/20 p-2 rounded-full">
                    <Cloud size={20} className="text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.cloud.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-white/5 text-gray-300 border-white/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
