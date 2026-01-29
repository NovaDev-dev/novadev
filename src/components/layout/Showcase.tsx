// Local UI Components
import Project from "../ui/Project"

export default function Showcase() {
  return (
    <section className="py-32 px-24 xl:px-64 bg-light text-secondary">
        <div className=" mx-auto space-y-32">

            {/* Section Header */}
            <div className="max-w-xl">
                <h2 className="text-4xl lg:text-6xl font-display font-bold">
                    Our Work
                </h2>
                <p className="mt-4 lg:text-xl">
                    A small selection of products we’ve designed and built for real
                    users.
                </p>
            </div>

            {/* Project 1 */}
            <Project 
                title="Amaya Projects" 
                desc=" A centralized platform helping students access services,
                events, and resources in one seamless experience."
                details={["Product Design", "Full-stack Web App", "Authentication & Data"]}
                image="amaya-projects"
                logo="amaya-logo"
            />


            {/* Project 2 */}
            <Project 
                title="Campus Connect" 
                desc="A small selection of products we’ve designed and built for real
                    users."
                details={["Product Design", "Full-stack Web App", "Authentication & Data"]}
                image="campus-connect"
                reverse={true}
                logo="sait-logo"
            />
        </div>
    </section>
  );
}
