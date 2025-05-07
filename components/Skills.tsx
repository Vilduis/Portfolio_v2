"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Database,
  Server,
  Globe,
  Wrench,
  Users,
  Cloud,
  Check,
} from "lucide-react";

export default function Skills() {
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

  const softSkills = [
    "Trabajo en equipo",
    "Resolución de problemas",
    "Pensamiento analítico",
    "Proactividad",
  ];

  const languages = [{ name: "Inglés", level: "A2" }];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
      >
        <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl font-bold mb-12 text-center">
          Competencias
        </h2>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-white/5 border border-white/10 w-full">
              <TabsTrigger
                value="technical"
                className="data-[state=active]:bg-gradient-to-r from-blue-400 to-purple-400 text-white data-[state=active]:border-none"
              >
                <Code size={16} className="mr-2" />
                Técnicas
              </TabsTrigger>
              <TabsTrigger
                value="soft"
                className="data-[state=active]:bg-gradient-to-r from-blue-400 to-purple-400 text-white data-[state=active]:border-none"
              >
                <Users size={16} className="mr-2" />
                Blandas
              </TabsTrigger>
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-gradient-to-r from-blue-400 to-purple-400 text-white data-[state=active]:border-none"
              >
                <Globe size={16} className="mr-2" />
                Idiomas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-indigo-500/20 p-2 rounded-full">
                        <Code size={20} className="text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Lenguajes</h3>
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

                <Card className="glass-card card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <Globe size={20} className="text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Frontend</h3>
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

                <Card className="glass-card card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-pink-500/20 p-2 rounded-full">
                        <Server size={20} className="text-pink-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Backend</h3>
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

                <Card className="glass-card card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-indigo-500/20 p-2 rounded-full">
                        <Database size={20} className="text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Bases de Datos</h3>
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

                <Card className="glass-card card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <Wrench size={20} className="text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Herramientas</h3>
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

                <Card className="glass-card card-hover">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-pink-500/20 p-2 rounded-full">
                        <Cloud size={20} className="text-pink-400" />
                      </div>
                      <h3 className="text-xl font-semibold">Cloud</h3>
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
            </TabsContent>

            <TabsContent value="soft">
              <Card className="glass-card card-hover">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {softSkills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 p-4 glass-card rounded-lg"
                      >
                        <div className="bg-purple-500/20 p-2 rounded-full">
                          <Check size={20} className="text-purple-400" />
                        </div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="languages">
              <Card className="glass-card card-hover">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {languages.map((language) => (
                      <div
                        key={language.name}
                        className="flex items-center justify-between p-4 glass-card rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-pink-500/20 p-2 rounded-full">
                            <Globe size={20} className="text-pink-400" />
                          </div>
                          <span className="text-gray-300">{language.name}</span>
                        </div>
                        <Badge className="bg-gradient border-none">
                          {language.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
