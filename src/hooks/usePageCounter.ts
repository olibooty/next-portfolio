import { useEffect, useRef, useState } from "react";

const counterUrl = "https://olibooty-incrementcounterendpoint.web.val.run";

export const usePageCounter = () => {
    const [count, setCount] = useState<number | null>(null);
    const hasFetchedRef = useRef(false);

    useEffect(() => {
        if (hasFetchedRef.current) return;

        async function fetchCount() {
            try {
                const res = await fetch(counterUrl);
                const data = await res.json();
                setCount(data.count);
                hasFetchedRef.current = true;
            } catch {} // obvs don't do this in a real app
        }

        fetchCount();
    }, []);

    return { count };
};
