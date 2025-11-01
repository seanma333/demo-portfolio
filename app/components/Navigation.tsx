"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeLink === link.id
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.name}
                {activeLink === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-slate-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

