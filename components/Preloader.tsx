'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { ease: 'power1.inOut' },
            });

            // Reveal letters
            tl.to('.name-text span', {
                y: 0,
                stagger: 0.06,
                duration: 0.25,
            });

            // Slide panels down
            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.6,
                stagger: 0.1,
            })
                // Fade out name
                .to('.name-text span', { autoAlpha: 0 }, '<0.4')
                // Fade out preloader
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<0.8',
                );
        },
        { scope: preloaderRef },
    );

    const name = 'SYED ADHNAN MOIN';

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[9999] flex pointer-events-none"
        >
            {/* Vertical panels */}
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="preloader-item h-full w-[10%] bg-black"
                />
            ))}

            {/* Name */}
            <p className="name-text flex text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden font-anton text-[clamp(3rem,12vw,9rem)]">
                {name.split('').map((char, i) => (
                    <span key={i} className="inline-block translate-y-full">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default Preloader;
