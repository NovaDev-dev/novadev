// Next & React
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
// Local UI Components
import { Button } from "../common/Button"
// Types
import { ProjectProps, ProjectWidgetProps } from "@/types"

// Gallery items can be stills or short clips; pick the renderer by extension.
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

// Small round logo badge on a white chip.
function LogoBadge({ logo, title, size = "w-12 h-12" }: { logo: string; title: string; size?: string }) {
  return (
    <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-sm shrink-0">
      <img src={`/showcase/${logo}.png`} alt={`${title} logo`} className={`${size} object-contain`} />
    </div>
  );
}

// Discipline pills ("Branding", "Web", "Print", …) derived from the case study.
function TagPills({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-primary/30 px-2.5 py-1 text-xs font-semibold text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// Wide hero card for the standout project.
export function FeaturedProject({ props, tags, onClick }: ProjectProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white text-tertiary shadow-xl grid lg:grid-cols-2">
      {/* Image */}
      <div className="relative min-h-64 lg:min-h-full">
        <img
          src={`/showcase/${props.image}.png`}
          alt={`${props.title} preview`}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-8 lg:p-12">
        <span className="w-fit rounded-full bg-light px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          Featured project
        </span>

        <div className="flex items-center gap-4">
          <LogoBadge logo={props.logo} title={props.title} />
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-secondary">{props.title}</h3>
        </div>

        <TagPills tags={tags} />

        <p className="lg:text-lg text-tertiary/80 max-w-xl">{props.desc}</p>

        <div className="mt-2 flex flex-wrap gap-4">
          <Button className="border border-primary text-primary" onClick={onClick}>
            View case study →
          </Button>
          {props.demo && (
            <Button className="bg-strong text-white">
              <a href={props.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// Compact card for the grid below the featured project. The whole card opens
// the case study; the live link lives inside the modal.
export function ProjectCard({ props, tags, onClick }: ProjectProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white text-left text-tertiary shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-50">
        <img
          src={`/showcase/${props.image}.png`}
          alt={`${props.title} preview`}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <LogoBadge logo={props.logo} title={props.title} size="w-8 h-8" />
          <h3 className="text-xl font-display font-bold text-secondary">{props.title}</h3>
        </div>

        <TagPills tags={tags} />

        <p className="text-sm text-tertiary/70 line-clamp-2">{props.desc}</p>

        <span className="mt-auto pt-2 text-sm font-semibold text-primary">
          View case study →
        </span>
      </div>
    </button>
  );
}

// Thin discipline label with a trailing rule, e.g. "BRANDING ─────"
function CategoryLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{children}</span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export function ProjectWidget({ caseStudy, onClose }: ProjectWidgetProps) {
  // Full-size image opened from the gallery (null = lightbox closed)
  const [zoomed, setZoomed] = useState<string | null>(null);

  // Fall back to a single "Web" group when a case study has no gallery yet.
  const groups =
    caseStudy.gallery && caseStudy.gallery.length > 0
      ? caseStudy.gallery
      : caseStudy.image
      ? [{ category: "Web", items: [{ image: caseStudy.image, wide: true }] }]
      : [];

  const sections = Object.entries(caseStudy.sections).filter(
    ([, s]) => s !== undefined
  ) as [string, NonNullable<(typeof caseStudy.sections)[string]>][];
  const textSections = sections.filter(([, s]) => s.text);
  const listSections = sections.filter(([, s]) => s.list);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl max-h-[88vh] rounded-2xl bg-white text-tertiary overflow-y-auto shadow-2xl">
        {/* Close button — stays pinned while the body scrolls */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="sticky top-0 z-10 float-right m-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow hover:text-black"
        >
          <IoCloseSharp />
        </button>

        <div className="p-6 md:p-10">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-secondary">
            {caseStudy.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-tertiary/80">
            {caseStudy.summary}
          </p>

          {/* Deliverables — grouped by discipline */}
          {groups.length > 0 && (
            <div className="mt-10 space-y-10">
              {groups.map((group) => (
                <div key={group.category}>
                  <CategoryLabel>{group.category}</CategoryLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {group.items.map((item, idx) => (
                      <figure
                        key={idx}
                        className={`group ${item.wide ? "sm:col-span-2" : ""}`}
                      >
                        {isVideo(item.image) ? (
                          <video
                            src={item.image}
                            className={`block w-full overflow-hidden rounded-xl border border-gray-200 bg-black object-cover ${
                              item.wide ? "aspect-video" : "aspect-[4/3]"
                            }`}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() => setZoomed(item.image)}
                            className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
                          >
                            <img
                              src={item.image}
                              alt={item.caption ?? `${caseStudy.title} deliverable`}
                              className={`w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] ${
                                item.wide ? "aspect-video" : "aspect-[4/3]"
                              }`}
                            />
                          </button>
                        )}
                        {item.caption && (
                          <figcaption className="mt-2 text-sm text-tertiary/70">
                            {item.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem / Solution — side by side on desktop */}
          {textSections.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {textSections.map(([key, section]) => (
                <div key={key}>
                  <h3 className="mb-2 text-xl font-semibold text-secondary">
                    {section.heading}
                  </h3>
                  <p className="text-tertiary/80">{section.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technologies (and any other list sections) */}
          {listSections.map(([key, section]) => (
            <div key={key} className="mt-10">
              <CategoryLabel>{section.heading}</CategoryLabel>
              <ul className="flex flex-wrap gap-2">
                {section.list!.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Links */}
          {caseStudy.links && caseStudy.links.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-4 border-t border-gray-100 pt-8">
              {caseStudy.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-4 py-2 font-semibold text-white transition hover:bg-primary/80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox — full, uncropped view of a deliverable */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setZoomed(null)}
        >
          <button
            aria-label="Close image"
            className="absolute right-5 top-5 text-3xl text-white/80 hover:text-white"
            onClick={() => setZoomed(null)}
          >
            <IoCloseSharp />
          </button>
          <img
            src={zoomed}
            alt="Deliverable full view"
            className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}