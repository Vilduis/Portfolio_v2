"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import techIcons from "@/types/icons";
import { ProjectsOwn, services } from "@/components/listprojects";
import type { Project, Service } from "@/components/listprojects";

const Project = () => {
  // Estados para la paginación
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [currentServicePage, setCurrentServicePage] = useState(1);
  const itemsPerPage = 4; // Número de elementos por página

  // Lógica de paginación para proyectos
  const indexOfLastProject = currentProjectPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = ProjectsOwn.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalProjectPages = Math.ceil(ProjectsOwn.length / itemsPerPage);

  // Lógica de paginación para servicios
  const indexOfLastService = currentServicePage * itemsPerPage;
  const indexOfFirstService = indexOfLastService - itemsPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalServicePages = Math.ceil(services.length / itemsPerPage);

  // Función para obtener íconos de tecnologías
  const getTechIcon = (tech: keyof typeof techIcons) => {
    return <Image src={techIcons[tech]} alt={tech} width={16} height={16} />;
  };

  // Componente para renderizar tarjetas
  const renderCard = (item: Project | Service, type: "project" | "service") => (
    <div key={item.id} className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
      <Card className="relative bg-gray-900/50 border-gray-800 overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            fill
          />
          {type === "project" && "github" in item && item.github && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute inset-0 flex items-center justify-center space-x-4">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 p-4 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Eye size={30} />
                </a>
              </div>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {item.name}
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.technologies.map((tech: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {getTechIcon(tech as keyof typeof techIcons)}
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
          {type === "service" && "company" in item && (
            <p className="text-sm text-purple-400 mt-2">
              Desarrollado para: {item.company}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{item.description}</p>
        </CardContent>
      </Card>
    </div>
  );

  // Componente para renderizar paginación
  const renderPagination = (
    currentPage: number,
    totalPages: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ) => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className={`${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white"
            }`}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => setPage(page)}
              className={`${
                currentPage === page
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "hover:bg-white"
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            className={`${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white"
            }`}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  return (
    <section className="w-full text-white py-28" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2 ">
              Proyectos y Servicios
            </h2>
            <p className="text-gray-400 text-md">
              Explora mis proyectos personales y servicios profesionales.
            </p>
          </div>

          {/* Sección de Proyectos */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Proyectos Personales
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project) => renderCard(project, "project"))}
            </div>
            <div className="mt-8">
              {renderPagination(
                currentProjectPage,
                totalProjectPages,
                setCurrentProjectPage
              )}
            </div>
          </div>

          {/* Sección de Servicios */}
          <div>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Servicios Profesionales
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {currentServices.map((service) => renderCard(service, "service"))}
            </div>
            <div className="mt-8">
              {renderPagination(
                currentServicePage,
                totalServicePages,
                setCurrentServicePage
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
