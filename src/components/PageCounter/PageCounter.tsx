"use client";

import { usePageCounter } from "@/hooks/usePageCounter";

export const PageCounter = () => {
    const { count } = usePageCounter();

    return (
        <p>
            You are visitor number {count === null ? "..." : count} to this
            page.
        </p>
    );
};
