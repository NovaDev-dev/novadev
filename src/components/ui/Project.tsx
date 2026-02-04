// Next & React
import { IoCloseSharp } from "react-icons/io5";
// Local UI Components
import DeviceFrame from "../common/Frame"
import { Button } from "../common/Button"
// Types
import { ProjectProps, ProjectWidgetProps } from "@/types"

export default function Project ({props, onClick}: ProjectProps) {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <DeviceFrame
                className={`${props.reverse ? "lg:order-last" : ""}`}
                image={`/showcase/${props.image}.png`}
                alt={`${props.image} UI`}
            />
    
            <div>
                <div className="flex items-center gap-4">
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <img
                        src={`/showcase/${props.logo}.png`}
                        alt={`${props.logo} Logo`}
                        className="w-12 h-12 object-contain"
                        />
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-display font-bold">
                        {props.title}
                    </h3>
                </div>
                
                <p className="mt-4 lg:text-xl max-w-xl">{props.desc}</p>

                <ul className="my-6 text-sm lg:text-lg font-light space-y-1">
                    {props.details.map((text, i) => (
                        <li key={i}>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
    
                <Button className="text-primary  border-primary" onClick={onClick}>View case study →</Button>
            </div>
        </div>
    )
}

export function ProjectWidget({ caseStudy, onClose }: ProjectWidgetProps) {
   return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-4xl max-h-[80vh] rounded-xl bg-white text-tertiary overflow-y-auto shadow-xl p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-2xl font-bold"
        >
          <IoCloseSharp/>
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-secondary">
          {caseStudy.title}
        </h2>

        {/* Summary */}
        <p className="mb-6">{caseStudy.summary}</p>

        <img
            src={caseStudy.image}
            alt={`${caseStudy.image} screenshot`}
            className="w-full"
        />

        {/* Sections */}
        <div className="space-y-6">
          {Object.entries(caseStudy.sections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-2xl font-semibold mb-2 text-secondary">{section?.heading}</h3>
              {section?.text && <p className="mb-2">{section.text}</p>}
              {section?.list && (
                <ul className="flex flex-row flex-wrap ">
                  {section.list.map((item, idx) => (
                    <li className="p-2 m-1 rounded-md bg-secondary text-white font-bold text-sm" key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Links */}
        {caseStudy.links && caseStudy.links.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-4">
            {caseStudy.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/80 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}