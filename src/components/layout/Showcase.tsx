"use client";

// Next & React
import { useState } from "react";
// Local UI Components
import { FeaturedProject, ProjectCard, ProjectWidget } from "../ui/Project"
// Data
import { projects } from "@/data/projects"
import { caseStudies } from "@/data/caseStudies";
// Types
import { ProjectData } from "@/types";

// Disciplines a project covers = the categories of its case-study gallery.
const disciplines = (id: string): string[] =>
  caseStudies[id]?.gallery?.map((group) => group.category) ?? [];

export default function Showcase() {
  const [selected, setSelected] = useState<ProjectData | undefined>();

  const handleOnClick = (project: ProjectData) => setSelected(project);
  const handleOnClose = () => setSelected(undefined);

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <>
      <section id="portfolio" className="py-32 px-6 md:px-24 xl:px-64 bg-light text-secondary">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-6xl font-display font-bold">
              Our Work
            </h2>
            <p className="mt-4 lg:text-xl">
              A small selection of products we’ve designed and built for real users.
            </p>
          </div>

          {/* Featured project */}
          <div className="mt-16">
            <FeaturedProject
              props={featured}
              tags={disciplines(featured.id)}
              onClick={() => handleOnClick(featured)}
            />
          </div>

          {/* Remaining projects */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                props={project}
                tags={disciplines(project.id)}
                onClick={() => handleOnClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && <ProjectWidget caseStudy={caseStudies[selected.id]} onClose={handleOnClose} />}
    </>
  );
}
