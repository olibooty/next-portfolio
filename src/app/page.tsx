import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { Project } from "./types/Project";

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
        src: `${BASE_PATH}/rachael_site_screenshot.png`,
        alt: "Screenshot of Rachael's website",
        description:
            "A freelance project. Hosted on Github pages. Built with HTML, CSS, and a sprinkling of JavaScript.",
        projectLink: "https://rachaelreflex.com",
        codeLink: "https://github.com/olibooty/rachael-reflex",
    },
    {
        src: `${BASE_PATH}/portfolio_site_screenshot.png`,
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
            {/* <header className="p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">{name}</Link>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#skills" className="hover:underline">Skills</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header> */}

            <main className="container mx-auto px-6 py-12">
                <section id="about" className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
                        Full Stack Software Developer
                    </h2>
                    <p className="text-lg max-w-2xl">
                        A front-end focused, full-stack developer passionate
                        about building accessible and user-friendly web
                        experiences, I have been delivering results freelance
                        and for startups, enterprise and agencies since 2018,
                        and have even led an award-winning project.
                    </p>
                </section>

                <section id="projects" className="mb-20">
                    <h2 className="text-3xl font-bold mb-6">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.src} {...project} />
                        ))}
                    </div>
                </section>

                <section id="skills" className="mb-20">
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
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
                </section>
            </main>

            <footer className="p-6 text-center text-gray-600 dark:text-gray-400">
                <p>
                    &copy; {new Date().getFullYear()} {name}
                </p>
            </footer>
        </div>
    );
}
