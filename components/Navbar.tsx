"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/#home" },
    { name: "Sobre Mi", href: "/#about" },
    { name: "Competencias", href: "/#skills" },
    { name: "Proyectos", href: "/project" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2 },
    }),
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gradient-to-br from-gray-900 to-black border-b border-gray-800 w-full backdrop-blur-md z-50 fixed top-0">
      <div className="container mx-auto h-16 px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center gap-3"
        >
          <Link href="/#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
              <Image
                src="/logo.png"
                width={44}
                height={44}
                alt="Logo"
                className="rounded-full"
              />
            </div>
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text hover:scale-105 transition-transform duration-300">
              Vilduis
            </span>
          </Link>
        </motion.div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-end gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Link
                href={item.href}
                className="relative text-lg text-gray-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botón móvil */}
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-screen w-full bg-black/95 backdrop-blur-xl p-6 shadow-2xl z-50"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-gray-300 hover:text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-4 mt-16">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-lg py-2 px-4 rounded-lg hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
