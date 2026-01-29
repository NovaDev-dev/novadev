import { Button } from "../common/Button";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden text-white h-96 md:h-170">

      {/* Background color */}
      <div className="absolute inset-0 z-0 bg-tertiary" />

      {/* Black semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Pixel Calgary Tower */}
      <img
        src="/bow-tower.png"
        alt="Bow Tower"
        className="absolute bottom-0 z-0 select-none pointer-events-none"
      />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-24">
        <h1 className="text-4xl md:text-6xl font-display font-bold">
          Software Solutions in YYC
        </h1>
        <p className="hidden md:block mt-4 text-lg md:text-2xl max-w-xl">
          We craft web and mobile applications that empower startups and local businesses to grow.
        </p>

        <div className="mt-6 flex flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-primary">Get Started</Button>
            <Button className="text-muted border">Our Work</Button>
        </div>

        {/* Optional highlights */}
        <div className="hidden md:flex flex-wrap gap-6 justify-center md:justify-start mt-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Custom Web Apps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>Mobile Applications</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span>UI/UX Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
