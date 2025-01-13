"use client";

import { ANIMATABLE_BOX_CLASS } from "@/constants";
import { useEffect } from "react";

interface SkillTagContainerProps {
    children: React.ReactNode;
}

export const SkillTagContainer = (props: SkillTagContainerProps) => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            if (!e?.target) return;

            const target = e.target as HTMLElement;
            if (target.classList.contains(ANIMATABLE_BOX_CLASS)) {
                target.style.setProperty("--size", "500px");
                target.style.setProperty("--x", e.offsetX.toString());
                target.style.setProperty("--y", e.offsetY.toString());
            }
        };

        const handleMouseOut = (e: MouseEvent): void => {
            const target = e.target as HTMLElement;
            if (target.classList.contains(ANIMATABLE_BOX_CLASS)) {
                target.style.setProperty("--size", "0");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {props.children}
        </div>
    );
};
