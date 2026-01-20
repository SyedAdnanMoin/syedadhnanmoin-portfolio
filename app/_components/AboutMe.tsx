'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            if (!sectionRef.current) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    scrub: false,
                    toggleActions: 'play none none reverse',
                },
            });

            // --- Heading lines animation ---
            const headingLines = headingRef.current?.querySelectorAll(
                '.about-heading-line',
            );

            if (headingLines && headingLines.length > 0) {
                tl.from(headingLines, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.12,
                    duration: 0.7,
                    ease: 'power3.out',
                });
            }

            // --- Right content block animation ---
            if (contentRef.current) {
                tl.from(
                    contentRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                    },
                    '-=0.3',
                );
            }
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-section mt-16 border-t border-border/40"
        >
            <div className="container">
                {/* Top big statement */}
                <h1
                    ref={headingRef}
                    className="max-w-5xl font-anton text-[clamp(2.6rem,4vw,3.3rem)] leading-tight tracking-tight"
                >
                    <span className="about-heading-line block text-foreground">
                        I build{' '}
                        <span className="text-primary">
                            scalable backend systems
                        </span>
                        ,
                    </span>
                    <span className="about-heading-line block text-foreground">
                        <span className="text-primary">
                            distributed services
                        </span>
                        , and AI-driven, data-intensive
                    </span>
                    <span className="about-heading-line block text-foreground">
                        applications with a focus on{' '}
                        <span className="text-primary">reliability</span> and{' '}
                        <span className="text-primary">performance</span>.
                    </span>
                </h1>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-border/40" />

                {/* Main two-column content */}
                <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-start">
                    {/* Left / intro */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                            This is me.
                        </p>
                        <p className="text-3xl md:text-4xl font-anton text-foreground">
                            Hi, I&apos;m Syed Adhnan.
                        </p>
                    </div>

                    {/* Right / description + bullets */}
                    <div ref={contentRef}>
                        <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                            {/* I&apos;m a Software Engineer with 2+ years of
                            experience building scalable backend systems,
                            distributed services, and AI-driven, data-intensive
                            applications. I&apos;ve worked on enterprise
                            solutions at Morgan Stanley and automation &amp;
                            analytics platforms at MilliporeSigma, using Python,
                            Java, SQL, React/TypeScript, and cloud
                            infrastructure.  */}
                            Software Engineer with 2+ years delivering
                            API&apos;s, data pipelines, and distributed services
                            across Morgan Stanley and MilliporeSigma. I work
                            mostly in Python, Java Spring Boot, SQL, and cloud
                            (AWS/GCP), with React/TypeScript when needed.
                        </p>

                        <ul className="mt-5 space-y-3 text-sm md:text-base text-muted-foreground">
                            <li className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>
                                    Designed and shipped backend and ML-enabled
                                    services handling high-volume data
                                    processing and workflow automation.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>
                                    Built data pipelines and APIs that improve
                                    reliability, observability, and developer
                                    experience.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>
                                    Own features end-to-end—from system design
                                    through deployment and monitoring.
                                </span>
                            </li>
                        </ul>

                        {/* Small stats row */}
                        <div className="mt-8 grid gap-6 text-sm uppercase tracking-[0.18em] text-muted-foreground md:grid-cols-3">
                            <div>
                                <p className="text-[0.7rem]">Experience</p>
                                <p className="mt-1 text-2xl text-foreground font-anton">
                                    2+ years
                                </p>
                            </div>
                            <div>
                                <p className="text-[0.7rem]">
                                    Featured projects
                                </p>
                                <p className="mt-1 text-2xl text-foreground font-anton">
                                    5+
                                </p>
                            </div>
                            <div>
                                <p className="text-[0.7rem]">Tech focus</p>
                                <p className="mt-1 text-2xl text-foreground font-anton">
                                    Full-Stack · Data · Cloud · ML
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
