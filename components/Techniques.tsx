"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Globe, Wrench, Cloud } from "lucide-react";
import Image from "next/image";
import techIcons, { TechName } from "@/types/icons";

// Mapear nombres de skills a claves de techIcons
const iconKeyMap: Record<string, TechName> = {
  // languages
  Python: "Python",
  Java: "Java",
  "C#": "CSharp",
  "C++": "CPlusPlus",
  Javascript: "JavaScript",
  TypeScript: "TypeScript",
  // frontend
  HTML5: "HTML5",
  CSS3: "CSS3",
  Bootstrap: "Bootstrap",
  Angular: "Angular",
  React: "React",
  "Next.js": "Nextjs",
  "Tailwind CSS": "Tailwind",
  // backend
  "Spring Boot": "Spring",
  "Node.js (Express)": "Express",
  Laravel: "Laravel",
  // databases
  SQL: "SQLServer", // si prefieres SQLServer u otro, ajusta aquí
  MongoDB: "MongoDB",
  PostgreSQL: "PostgreSQL",
  MySQL: "MySQL",
  // tools
  Git: "Git",
  Trello: "Trello",
  // cloud
  AWS: "AWS",
};

export default function Techniques() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const technicalSkills = {
    languages: ["Python", "Java", "C#", "C++", "Javascript", "TypeScript"],
    frontend: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Angular",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    backend: ["Spring Boot", "Node.js (Express)", "Laravel"],
    databases: ["SQL", "MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Trello"],
    cloud: ["AWS"],
  };

  const categoryIcons = {
    languages: <Code size={20} className="text-indigo-400" />,
    frontend: <Globe size={20} className="text-purple-400" />,
    backend: <Server size={20} className="text-pink-400" />,
    databases: <Database size={20} className="text-indigo-400" />,
    tools: <Wrench size={20} className="text-purple-400" />,
    cloud: <Cloud size={20} className="text-pink-400" />,
  } as const;

  const iconBg = {
    languages: "bg-indigo-500/20",
    frontend: "bg-purple-500/20",
    backend: "bg-pink-500/20",
    databases: "bg-indigo-500/20",
    tools: "bg-purple-500/20",
    cloud: "bg-pink-500/20",
  } as const;

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
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <Card
                key={category}
                className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`${
                        iconBg[category as keyof typeof iconBg]
                      } p-2 rounded-full`}
                    >
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: string) => {
                      const key = iconKeyMap[skill];
                      return (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-white/5 text-gray-300 border-white/10 flex items-center"
                        >
                          {key && techIcons[key] && (
                            <Image
                              src={techIcons[key]}
                              alt={skill}
                              width={16}
                              height={16}
                              className="mr-2"
                            />
                          )}
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
