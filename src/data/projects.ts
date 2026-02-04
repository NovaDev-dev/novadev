import { ProjectData } from "@/types";

export const projects: ProjectData[] = [
  {
    id: "amaya-projects",
    title: "Amaya Projects",
    desc: "A web application that connects users with IT consultants and enables simple appointment booking.",
    details: ["Requirements Gathering", "Full UX/UI Creation", "Responsive Web App"],
    image: "amaya-projects",
    logo: "amaya-logo",
  },
  {
    id: "campus-connect",
    title: "Campus Connect",
    desc: "A centralized platform helping students access services, events, and resources in one seamless experience.",
    details: ["Product Design", "Full-stack Web App", "Authentication & Data"],
    image: "campus-connect",
    logo: "sait-logo",
    reverse: true,
  },
];
