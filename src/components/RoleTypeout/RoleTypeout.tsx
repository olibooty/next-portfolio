"use client";

import { TypeAnimation } from "react-type-animation";

export const RoleTypeout = () => {
    return (
        <>
            <span className="sr-only">About</span>

            <TypeAnimation
                sequence={[
                    "Full Stack Software Developer",
                    4000,
                    "Full Stack Developer",
                    1500,
                    "Full Stack Web Developer",
                    1500,
                    "Front-end Developer",
                    1000,
                    "Front-end Engineer",
                    1500,
                    "Front-end Web Developer",
                    1500,
                    "Web Developer",
                    1500,
                ]}
                aria-hidden="true"
                preRenderFirstString
                cursor={false}
                speed={35}
                deletionSpeed={65}
                repeat={Infinity}
            />
        </>
    );
};
