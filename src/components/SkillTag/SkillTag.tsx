import { ANIMATABLE_BOX_CLASS } from "@/constants";
import { cn } from "@/lib/utils";
import classes from "./SkillTag.module.scss";

interface SkillTagProps {
    skill: string;
}

export const SkillTag = ({ skill }: SkillTagProps) => {
    const classNames = cn(
        classes.box,
        ANIMATABLE_BOX_CLASS,
        "bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
    );

    return (
        <div key={skill} className={classNames}>
            {skill}
        </div>
    );
};
