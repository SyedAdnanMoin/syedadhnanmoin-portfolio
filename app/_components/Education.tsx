'use client';

import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import { MY_EDUCATION } from '@/lib/data';
import { cn } from '@/lib/utils';

const Education = () => {
    return (
        <section id="education" className="py-section">
            <div className="container">
                <SectionTitle title="Education" />

                <div className="mt-10 space-y-10">
                    {MY_EDUCATION.map((item) => (
                        <div
                            key={item.id}
                            className="group grid grid-cols-[72px,minmax(0,1fr)] gap-6 items-stretch"
                        >
                            {/* LEFT RAIL */}
                            <div className="relative flex justify-center">
                                {/* darker vertical line */}
                                <div className="h-full w-[2px] bg-neutral-800" />

                                {/* year label (end year) */}
                                <span className="absolute -left-10 top-6 text-xs text-muted-foreground">
                                    {item.endYear}
                                </span>

                                {/* dot: grey ring by default, yellow glow on hover */}
                                <span
                                    className={cn(
                                        'absolute top-6 h-3 w-3 rounded-full bg-background border border-neutral-600',
                                        // 250,204,21 ≈ #FACC15 (fluorescent yellow)
                                        // 'transition-shadow duration-200 group-hover:shadow-[0_0_0_6px_rgba(250,204,21,0.75)]',
                                        'transition-shadow duration-200 group-hover:shadow-[0_0_0_8px_rgba(250,204,21,0.85)]',
                                    )}
                                />
                            </div>

                            {/* CARD */}
                            <article className="rounded-3xl border border-border/70 bg-background/70 px-5 py-5 md:px-8 md:py-6 transition-colors duration-200">
                                <div className="flex items-start gap-4 md:gap-6">
                                    {/* logo */}
                                    {item.logo && (
                                        <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-2xl bg-muted/10 flex items-center justify-center">
                                            <Image
                                                src={item.logo}
                                                alt={`${item.school} logo`}
                                                width={56}
                                                height={56}
                                                className="max-h-12 max-w-full object-contain"
                                            />
                                        </div>
                                    )}

                                    <div className="flex-1">
                                        {/* degree + school + years */}
                                        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                            <div>
                                                <p className="text-2xl md:text-3xl font-anton uppercase tracking-wide transition-colors duration-200 group-hover:text-primary">
                                                    {item.degree}
                                                </p>
                                                <p className="mt-1 text-sm md:text-base text-muted-foreground">
                                                    {item.school}
                                                </p>
                                            </div>

                                            <p className="mt-2 text-xs md:text-sm text-muted-foreground">
                                                {item.startYear} –{' '}
                                                {item.endYear}
                                            </p>
                                        </div>

                                        {/* coursework – shown on hover only */}
                                        {item.coursework &&
                                            item.coursework.length > 0 && (
                                                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-200 ease-out group-hover:max-h-40 group-hover:opacity-100">
                                                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
                                                        Coursework
                                                    </p>
                                                    <ul className="mt-2 flex flex-wrap gap-2 text-xs md:text-sm">
                                                        {item.coursework.map(
                                                            (course) => (
                                                                <li
                                                                    key={course}
                                                                    className="rounded-full border border-white/15 bg-background/90 px-3 py-1 text-muted-foreground"
                                                                >
                                                                    {course}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
