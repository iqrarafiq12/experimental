"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "./Data/Projects";
import { Button } from "@/components/ui/button";

const filters = ["All", "Villa", "Residence", "Apartment"] as const;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[42px] font-semibold tracking-tight text-[var(--foreground)]">
            Selected projects <span className="text-sm text-muted-foreground">(21)</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Project List */}
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                className="group flex items-center justify-between border-b border-border pb-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {project.category} · {project.location}
                  </p>
                  <h3 className="text-lg font-light text-foreground group-hover:underline">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow Button */}
                <Link
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl 
                             bg-white/10 backdrop-blur-md border border-white/20 
                             shadow-lg transition-all duration-300 
                             hover:bg-white/20 hover:scale-105"
                >
                  <ArrowUpRight className="h-5 w-5 text-[var(--accent)]" />
                </Link>
              </div>
            ))}
          </div>

          {/* Right: Image Preview */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
