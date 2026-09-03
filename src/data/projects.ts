import { ProjectData } from "@/types";

export const projects: ProjectData[] = [
  {
    id: "punto-latino",
    title: "Punto Latino",
    desc: "A full brand identity package for a Colombian restaurant — website, logo, menu design, and banners — translating Colombian cultural heritage into a cohesive visual language.",
    details: ["Brand Identity Design", "Website Development", "Menu & Print Collateral"],
    image: "punto-latino/web",
    logo: "punto-latino/logo",
    demo: "https://puntolatinoyyc.com",
    featured: true,
  },
  {
    id: "amaya-projects",
    title: "Amaya Projects",
    desc: "A web application that connects users with IT consultants and enables simple appointment booking.",
    details: ["Requirements Gathering", "Full UX/UI Creation", "Responsive Web App"],
    image: "amaya-projects/web",
    logo: "amaya-projects/logo",
    reverse: true,
  },
  {
    id: "asi-es-colombia",
    title: "Así es Colombia",
    desc: "A digital home for Colombian folklore, celebrating over 25 years of music, dance, and cultural heritage.",
    details: ["Client Consultation", "Custom Design System", "Cross-Device Optimization"],
    image: "asi-es-colombia/web",
    logo: "asi-es-colombia/logo",
    demo: "https://asiescolombia.com/",
  },
  {
    id: "campus-connect",
    title: "Campus Connect",
    desc: "A centralized platform helping students access services, events, and resources in one seamless experience.",
    details: ["Product Design", "Full-stack Web App", "Authentication & Data"],
    image: "campus-connect/web",
    logo: "campus-connect/logo",
    reverse: true,
  },
];
