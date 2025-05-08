"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./Education";
import Experience from "./Experience";
import Technniques1 from "./Techniques1";
import { Code, Briefcase, GraduationCap } from "lucide-react";

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
                value="experience"
                className="data-[state=active]:bg-gradient-to-r from-blue-400 to-purple-400 text-white data-[state=active]:border-none"
              >
                <Briefcase size={16} className="mr-2" />
                Experiencia
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-gradient-to-r from-blue-400 to-purple-400 text-white data-[state=active]:border-none"
              >
                <GraduationCap size={16} className="mr-2" />
                Educación
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <Technniques1 />
            </TabsContent>

            <TabsContent value="experience">
              <Experience />
            </TabsContent>

            <TabsContent value="education">
              <Education />
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
}
