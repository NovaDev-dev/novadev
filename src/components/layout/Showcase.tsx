"use client";

// Next & React
import { useState } from "react";
// Local UI Components
import Project, { ProjectWidget } from "../ui/Project"
// Data
import { projects } from "@/data/projects"
import { caseStudies } from "@/data/caseStudies";
// Types
import { ProjectData } from "@/types";

export default function Showcase() {
  const [selected, setSelected] = useState<ProjectData | undefined>();

  const handleOnClick = (project: ProjectData) => {
    setSelected(project);
  };

  const handleOnClose = () => {
    setSelected(undefined);
  };


  return (
    <>
      <section id="portfolio" className="py-32 px-6 md:px-24 xl:px-64 bg-light text-secondary">
        <div className="mx-auto space-y-16 md:space-y-32">
          {/* Section Header */}
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-6xl font-display font-bold">
              Our Work
            </h2>
            <p className="mt-4 lg:text-xl">
              A small selection of products we’ve designed and built for real users.
            </p>
          </div>

          {/* Projects */}
          {projects.map((project, idx) => (
            <Project
              key={idx}
              props={project}
              onClick={() => handleOnClick(project)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && <ProjectWidget caseStudy={caseStudies[selected.id]} onClose={handleOnClose} />}
    </>
  );
}
