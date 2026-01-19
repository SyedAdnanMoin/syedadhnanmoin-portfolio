'use client';

import parse from 'html-react-parser';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { useRef } from 'react';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // simple fade-in for the details block
    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.from(containerRef.current.querySelectorAll('.fade-in'), {
                autoAlpha: 0,
                y: 24,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power2.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-5 pb-14">
            <div className="container" ref={containerRef}>
                {/* Back link */}
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex gap-2 items-center group h-12"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>

                {/* Main content */}
                <div className="min-h-[calc(100svh-100px)] flex fade-in">
                    <div className="relative w-full max-w-[720px] mx-auto">
                        {/* Title */}
                        <div className="flex items-start gap-6 mb-10">
                            <h1 className="text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                                <span className="inline-block">
                                    {project.title}
                                </span>
                            </h1>
                        </div>

                        {/* Meta + description */}
                        <div className="space-y-7 text-lg pb-20">
                            <div className="fade-in">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Year
                                </p>
                                <p>{project.year}</p>
                            </div>

                            <div className="fade-in">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Tech &amp; Technique
                                </p>
                                <p>{project.techStack.join(', ')}</p>
                            </div>

                            <div className="fade-in">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Description
                                </p>
                                <div className="prose-xl markdown-text">
                                    {parse(project.description)}
                                </div>
                            </div>

                            {project.role && (
                                <div className="fade-in">
                                    <p className="text-muted-foreground font-anton mb-3">
                                        My Role
                                    </p>
                                    <div className="prose-xl markdown-text">
                                        {parse(project.role)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
