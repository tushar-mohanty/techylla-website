"use client";

import { useEffect, useState, useRef } from "react";

export default function Counter({ target, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;

                    let current = 0;
                    const increment = target / 50;

                    const interval = setInterval(() => {
                        current += increment;

                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 40);
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}