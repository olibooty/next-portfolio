import { Project } from "@/app/types/Project";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = (props: Project) => {
    return (
        <div
            key={props.src}
            className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
        >
            <Image
                src={props.src}
                alt={props.alt}
                width={640}
                height={360}
                className="rounded object-cover aspect-video"
                priority
            />

            <p className="text-lg">{props.description}</p>

            <div className="flex gap-2 mt-auto">
                <Link
                    href={props.projectLink}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    View Project
                </Link>
                <span aria-hidden>|</span>
                <Link
                    href={props.codeLink}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    View Code
                </Link>
            </div>
        </div>
    );
};
