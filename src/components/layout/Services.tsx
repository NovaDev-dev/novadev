// Local Components
import Service from "../ui/Service";
// Styles
import "@/styles/services-scrollbar.css";
// Data
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="services-page py-32 px-6 md:px-24 xl:px-64 bg-tertiary text-white w-full">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-4xl lg:text-6xl font-display font-bold text-muted">
          What We Do
        </h2>
        <p className="mt-4 lg:text-xl max-w-2xl">
          End-to-end software development, done right.
        </p>
      </div>

      {/* Slider */}
      <div
        className="
          services-scroll
          flex gap-8
          overflow-x-auto
          snap-x snap-mandatory
          pb-6
        "
      >
        {services.map((service, idx) => (
            <Service 
                key={idx}
                title={service.title}
                image={service.image}   
            />
        ))}
      </div>
    </section>
  );
}
