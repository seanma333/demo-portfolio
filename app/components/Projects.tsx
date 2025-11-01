"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A modern e-commerce platform built with Next.js and Stripe integration. Features include real-time inventory, cart management, and secure checkout.",
    image: "/next.svg",
    tags: ["Next.js", "React", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A social media dashboard with real-time analytics and data visualization. Built with React and D3.js for interactive charts.",
    image: "/vercel.svg",
    tags: ["React", "D3.js", "API"],
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A task management application with drag-and-drop functionality, team collaboration, and project tracking features.",
    image: "/globe.svg",
    tags: ["TypeScript", "Tailwind", "Firebase"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden">
                <div className="relative w-32 h-32 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium text-sm group/link"
                >
                  View Project
                  <svg
                    className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

