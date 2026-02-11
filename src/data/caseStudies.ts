import { CaseStudy } from "@/types";

export const caseStudies : Record<string, CaseStudy> = {

    // 1. Amaya Projects

   "amaya-projects" : {
        id: "amaya-projects",
        title: "Amaya Projects On-Demand",
        summary: "Amaya Projects On-Demand is an online service offered by Amaya Projects. It connects users with professional IT consulting services through a seamless virtual experience. Users can browse offerings, book appointments, and pay securely—all in one place.",
        sections: {
        problem: {
            heading: "Problem",
            text: "Users needed a single platform to discover services, book appointments, and pay securely. Existing solutions were fragmented, lacked multilingual support, and didn’t offer seamless scheduling or payment options. It was essential for the platform to reflect consultants’ real-time availability.",
        },
        solution: {
            heading: "Solution",
            text: "Amaya Projects On-Demand solves this by providing a single, user-friendly platform where users can browse services, schedule appointments with real-time availability, make secure payments via Stripe (cards, Apple Pay, Google Pay), and receive automated email confirmations with calendar invites including Teams meeting links.",
        },
        technologies: {
            heading: "Technologies",
            list: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Stripe", "next-intl", "Google Calendar", "Outlook Calendar", "Microsoft Teams", "Vercel", "Git/GitHub", "Nodemailer"]
        }
        },
        image: "/showcase/amaya-projects-1.png",
        links: [
            { label: "GitHub", href: "https://github.com/Amaya-Projects-Inc" },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/amaya-projects/" },
        ],
    },

    // 2. Así es Colombia

   "asi-es-colombia" : {
        id: "asi-es-colombia",
        title: "Así es Colombia",
        summary: "This project is a responsive website for Así es Colombia, a local organization dedicated to sharing Colombian music and dance. The page introduces users to the group’s mission, rhythms, and cultural activities, and features a dynamic section displaying upcoming performances, making it easy for visitors to stay informed and engaged.",
        sections: {
            problem: {
                heading: "Problem",
                text: "Así es Colombia needed a modern and centralized online presence to showcase over 25 years of cultural trajectory. Their previous digital presence did not clearly communicate their mission, highlight traditional Colombian rhythms, or provide an easy way for visitors to discover upcoming performances and events."
            },
            solution: {
                heading: "Solution",
                text: "I designed and developed a responsive website that presents the organization’s history, mission, and cultural impact in a visually engaging way. The platform includes sections explaining Colombian folkloric rhythms, a gallery highlighting more than 25 years of performances, and a dynamic events section that keeps visitors updated on upcoming shows. The design focuses on vibrant visuals, clear storytelling, and intuitive navigation."
            },
            technologies: {
                heading: "Technologies",
                list: [
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "TypeScript",
                    "Vercel",
                    "Git/GitHub"
                ]
            }
        },
        image: "/showcase/asi-es-colombia-1.gif",
        links: [
            { label: "Live Website", href: "https://asiescolombia.com/" },
            { label: "GitHub", href: "https://github.com/NovaDev-dev/aec" },
            { label: "Instagram Post", href: "https://www.instagram.com/p/DUi5ZbbCZ6g/" }
        ],
    },


    // 3. Campus Connect

    "campus-connect" : {
        id: "campus-connect",
        title: "Campus Connect - SAIT IC Platform",
        summary: "CampusConnect is a full-stack web application developed for SAIT's International Centre. It serves international and domestic students, alumni, and administrators, offering key features like campus event registration, group messaging, user notifications, and analytics.",
        sections: {
        problem: {
            heading: "Problem",
            text: "The SAIT International Center needed a modern social platform to connect more than 10,000 students, faculty, and staff. Requirements included event management, real-time notifications, content moderation, analytics dashboard, and scalable infrastructure to handle peak usage during enrollment periods.",
        },
        solution: {
            heading: "Solution",
            text: "Contributed to the development of a production-grade social platform using microservices. Implemented real-time chat and notifications, assisted in building the admin dashboard and analytics, and worked with the team on Kubernetes deployments to support peak traffic periods.",
        },
        technologies: {
            heading: "Technologies",
            list: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Firebase", "Azure", "Google Calendar", "Redux", "Microsoft Teams", "Vercel", "Git/GitHub",]
        }
        },
        image: "/showcase/campus-connect-1.png",
        links: [
            { label: "GitHub", href: "https://github.com/davidpal3c/CampusConnect_next_express" },
        ],
    },
};
