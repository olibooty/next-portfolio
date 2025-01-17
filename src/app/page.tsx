import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { RoleTypeout } from "@/components/RoleTypeout/RoleTypeout";
import { Section } from "@/components/Section/Section";
import { SkillTag } from "@/components/SkillTag/SkillTag";
import { SkillTagContainer } from "@/components/SkillTagContainer/SkillTagContainer";
import { Project } from "@/types/Project";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const name = "Oli Booty";

const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "(S)CSS",
    "Node.js",
    "MongoDB",
    "vitest",
    "Cypress",
    "Git",
];

const BASE_PATH = "/portfolio";

const projects: Project[] = [
    {
        src: `${BASE_PATH}/rachael_site_screenshot_s.png`,
        alt: "Screenshot of Rachael's website",
        description:
            "A freelance project. Hosted on Github pages. Built with HTML, CSS, and a sprinkling of JavaScript.",
        projectLink: "https://rachaelreflex.com",
        codeLink: "https://github.com/olibooty/rachael-reflex",
    },
    {
        src: `${BASE_PATH}/Grafana_screenshot_s.png`,
        alt: "Screenshot of Grafana dashboard showing analytics of Raspberry Pi",
        description: "A hobby project, exporting Raspberry Pi data with prometheus - including network traffic and disk space - and displaying it on a Grafana dashboard",
    },
    {
        src: `${BASE_PATH}/portfolio_site_screenshot_s.png`,
        alt: "Screenshot of this portfolio website",
        description:
            "This portfolio website, bootstrapped with v0 and co-created with copilot. Hosted on Github pages. Built with Next.js and Tailwind CSS.",
        projectLink: "https://olibooty.github.io/portfolio",
        codeLink: "https://github.com/olibooty/portfolio",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <main className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>

                <div className="flex flex-col gap-20">
                    <Section id="about" heading={<RoleTypeout />}>
                        <p className="text-lg max-w-2xl">
                            A front-end focused, full-stack developer passionate
                            about building accessible and user-friendly web
                            experiences. Delivering results for startups,
                            enterprise and agencies since 2018, including
                            leading on award-winning projects.
                        </p>
                    </Section>

                    <Section id="projects" heading="Projects">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.src} {...project} />
                            ))}
                        </div>
                    </Section>

                    <Section id="skills" heading="Key Skills">
                        <SkillTagContainer>
                            {skills.map((skill) => (
                                <SkillTag key={skill} skill={skill} />
                            ))}
                        </SkillTagContainer>
                    </Section>

                    <Section id="contact" heading="Get in Touch">
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com/olibooty"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                            >
                                <Github size={24} aria-hidden />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/oliver-booty"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                            >
                                <Linkedin size={24} aria-hidden />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="mailto:oliverbootyltd@gmail.com"
                                rel="noreferrer"
                                content="nofollow"
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                            >
                                <Mail size={24} aria-hidden />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </Section>
                </div>
            </main>

            <footer className="p-6 text-center text-gray-600 dark:text-gray-400">
                <p>
                    &copy; {new Date().getFullYear()} {name}{" "}
                    <span aria-hidden>|</span> Built with ❤️ and 🤖
                </p>
            </footer>
        </div>
    );
}
