// 'use client';

// import SectionTitle from '@/components/SectionTitle';
// import { MY_EXPERIENCE } from '@/lib/data';
// import { cn } from '@/lib/utils';
// import Image from 'next/image';
// import React, { useMemo, useRef, useState, useEffect } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// import TimelineRail from './TimelineRail';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// type Tool = { name: string; icon?: string };

// type ExperienceItem = {
//     company: string;
//     title: string;
//     duration: string; // e.g. "Oct 2025 - Dec 2025"
//     logo?: string;
//     highlights?: string[];
//     tools?: Tool[];
// };

// // --- helpers ---
// function getStartYear(duration: string): number {
//     const m = duration.match(/(20\d{2})/);
//     return m ? Number(m[1]) : 0;
// }

// function clamp(n: number, a: number, b: number) {
//     return Math.max(a, Math.min(b, n));
// }

// export default function Experiences() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const listRef = useRef<HTMLDivElement>(null);

//     const [openIndex, setOpenIndex] = useState<number | null>(0);

//     // Timeline rail state
//     const [marks, setMarks] = useState<{ year: number; top: number }[]>([]);
//     const [activeYear, setActiveYear] = useState<number | null>(null);
//     const [progressPx, setProgressPx] = useState(0);
//     const [trackHeight, setTrackHeight] = useState(0);

//     const items = MY_EXPERIENCE as ExperienceItem[];

//     // group: only one year marker per year (first item in that year)
//     const yearFirstIndex = useMemo(() => {
//         const map = new Map<number, number>();
//         items.forEach((it, idx) => {
//             const y = getStartYear(it.duration);
//             if (!map.has(y)) map.set(y, idx);
//         });

//         return Array.from(map.entries())
//             .sort((a, b) => b[0] - a[0])
//             .map(([year, idx]) => ({ year, idx }));
//     }, [items]);

//     const yearAnchorRefs = useRef<Record<number, HTMLDivElement | null>>({});
//     const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//     useGSAP(
//         () => {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: 'top 80%',
//                     end: 'bottom 70%',
//                     scrub: 0.5,
//                 },
//             });

//             tl.from('.exp-row', {
//                 y: 30,
//                 opacity: 0,
//                 stagger: 0.18,
//                 ease: 'none',
//             });
//         },
//         { scope: containerRef },
//     );

//     useEffect(() => {
//         const sectionEl = containerRef.current;
//         const listEl = listRef.current;
//         if (!sectionEl || !listEl) return;

//         let raf = 0;

//         const measure = () => {
//             const sectionRect = sectionEl.getBoundingClientRect();
//             const sectionHeight = sectionRect.height || 1;

//             const stickyViewportHeight = window.innerHeight - 160;
//             setTrackHeight(stickyViewportHeight);

//             const nextMarks: { year: number; top: number }[] = [];

//             yearFirstIndex.forEach(({ year }) => {
//                 const anchor = yearAnchorRefs.current[year];
//                 if (!anchor) return;

//                 const r = anchor.getBoundingClientRect();
//                 const offsetInSection = r.top - sectionRect.top;
//                 const ratio = offsetInSection / sectionHeight;

//                 const top = clamp(
//                     ratio * stickyViewportHeight,
//                     0,
//                     stickyViewportHeight,
//                 );

//                 nextMarks.push({ year, top });
//             });

//             setMarks(nextMarks);

//             const focusY = window.innerHeight * 0.4;
//             let bestYear: number | null = null;
//             let bestDist = Infinity;

//             cardRefs.current.forEach((card, idx) => {
//                 if (!card) return;
//                 const rect = card.getBoundingClientRect();
//                 const centerY = rect.top + rect.height / 2;
//                 const dist = Math.abs(centerY - focusY);
//                 if (dist < bestDist) {
//                     bestDist = dist;
//                     bestYear = getStartYear(items[idx].duration);
//                 }
//             });

//             setActiveYear(bestYear);

//             const totalScrollable = sectionHeight - window.innerHeight;
//             const scrolled = clamp(
//                 -sectionRect.top,
//                 0,
//                 totalScrollable <= 0 ? 0 : totalScrollable,
//             );

//             const progress =
//                 totalScrollable <= 0 ? 0 : scrolled / totalScrollable;

//             setProgressPx(progress * stickyViewportHeight);
//         };

//         const onScroll = () => {
//             cancelAnimationFrame(raf);
//             raf = requestAnimationFrame(measure);
//         };

//         const onResize = () => {
//             cancelAnimationFrame(raf);
//             raf = requestAnimationFrame(measure);
//         };

//         raf = requestAnimationFrame(measure);

//         window.addEventListener('scroll', onScroll, { passive: true });
//         window.addEventListener('resize', onResize);

//         return () => {
//             cancelAnimationFrame(raf);
//             window.removeEventListener('scroll', onScroll);
//             window.removeEventListener('resize', onResize);
//         };
//     }, [yearFirstIndex, items]);

//     return (
//         <section
//             id="my-experience"
//             className="py-section mt-24 md:mt-32 mb-32 md:mb-40"
//             ref={containerRef}
//         >
//             <div className="container">
//                 <SectionTitle title="My Experience" />

//                 <div className="mt-14 grid grid-cols-1 lg:grid-cols-[92px_1fr] gap-6">
//                     <TimelineRail
//                         marks={marks}
//                         activeYear={activeYear}
//                         progressPx={progressPx}
//                         trackHeight={trackHeight}
//                     />

//                     <div ref={listRef} className="space-y-10">
//                         {items.map((item, idx) => {
//                             const isOpen = openIndex === idx;

//                             const startYear = getStartYear(item.duration);
//                             const isFirstOfYear = yearFirstIndex.some(
//                                 (y) => y.year === startYear && y.idx === idx,
//                             );

//                             return (
//                                 <div
//                                     key={`${item.company}-${item.title}`}
//                                     className="exp-row"
//                                     ref={(el) => {
//                                         cardRefs.current[idx] = el;
//                                     }}
//                                 >
//                                     {isFirstOfYear ? (
//                                         <div
//                                             ref={(el) => {
//                                                 yearAnchorRefs.current[
//                                                     startYear
//                                                 ] = el;
//                                             }}
//                                             className="h-0"
//                                         />
//                                     ) : null}

//                                     <button
//                                         type="button"
//                                         onClick={() =>
//                                             setOpenIndex(isOpen ? null : idx)
//                                         }
//                                         className={cn(
//                                             'w-full text-left rounded-2xl px-6 py-6 md:px-8 md:py-8',
//                                             'bg-background-light transition',
//                                         )}
//                                     >
//                                         {/* Header block with logo nicely positioned */}
//                                         <div className="flex flex-col gap-3 md:gap-4">
//                                             {/* logo + company row */}
//                                             <div className="flex items-center gap-3 md:gap-4">
//                                                 {item.logo && (
//                                                     <div className="h-10 w-10 md:h-11 md:w-11 shrink-0 rounded-xl bg-muted/10 flex items-center justify-center">
//                                                         <Image
//                                                             src={item.logo}
//                                                             alt={`${item.company} logo`}
//                                                             width={44}
//                                                             height={44}
//                                                             className="max-h-9 max-w-9 object-contain"
//                                                         />
//                                                     </div>
//                                                 )}
//                                                 <p className="text-sm md:text-base text-muted-foreground">
//                                                     {item.company}
//                                                 </p>
//                                             </div>

//                                             {/* title + chevron row */}
//                                             <div className="flex items-start justify-between gap-6">
//                                                 <h3 className="text-4xl md:text-6xl font-anton leading-[0.95]">
//                                                     {item.title}
//                                                 </h3>

//                                                 <span
//                                                     className={cn(
//                                                         'shrink-0 mt-1 text-sm md:text-base text-muted-foreground',
//                                                         'transition-transform duration-300',
//                                                         isOpen
//                                                             ? 'rotate-180'
//                                                             : 'rotate-0',
//                                                     )}
//                                                     aria-hidden
//                                                 >
//                                                     ▾
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <p className="mt-3 text-base md:text-lg text-muted-foreground">
//                                             {item.duration}
//                                         </p>

//                                         {/* Dropdown */}
//                                         <div
//                                             className={cn(
//                                                 'grid transition-all duration-300 ease-out',
//                                                 isOpen
//                                                     ? 'grid-rows-[1fr] opacity-100 mt-6'
//                                                     : 'grid-rows-[0fr] opacity-0 mt-0',
//                                             )}
//                                         >
//                                             <div className="overflow-hidden">
//                                                 {item.highlights?.length ? (
//                                                     <ul className="space-y-2 text-muted-foreground">
//                                                         {item.highlights.map(
//                                                             (h, i) => (
//                                                                 <li
//                                                                     key={i}
//                                                                     className="flex gap-3"
//                                                                 >
//                                                                     <span className="mt-[7px] size-1.5 rounded-full bg-primary shrink-0" />
//                                                                     <span>
//                                                                         {h}
//                                                                     </span>
//                                                                 </li>
//                                                             ),
//                                                         )}
//                                                     </ul>
//                                                 ) : null}

//                                                 {item.tools?.length ? (
//                                                     <div className="mt-5 flex flex-wrap gap-2">
//                                                         {item.tools.map((t) => (
//                                                             <span
//                                                                 key={t.name}
//                                                                 className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm"
//                                                             >
//                                                                 {t.icon ? (
//                                                                     <Image
//                                                                         src={
//                                                                             t.icon
//                                                                         }
//                                                                         alt={
//                                                                             t.name
//                                                                         }
//                                                                         width={
//                                                                             18
//                                                                         }
//                                                                         height={
//                                                                             18
//                                                                         }
//                                                                     />
//                                                                 ) : null}
//                                                                 <span>
//                                                                     {t.name}
//                                                                 </span>
//                                                             </span>
//                                                         ))}
//                                                     </div>
//                                                 ) : null}
//                                             </div>
//                                         </div>
//                                     </button>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

//  mobile version

'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import TimelineRail from './TimelineRail';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Tool = { name: string; icon?: string };

type ExperienceItem = {
    company: string;
    title: string;
    duration: string;
    logo?: string;
    highlights?: string[];
    tools?: Tool[];
};

function getStartYear(duration: string): number {
    const m = duration.match(/(20\d{2})/);
    return m ? Number(m[1]) : 0;
}

function clamp(n: number, a: number, b: number) {
    return Math.max(a, Math.min(b, n));
}

// tiny hook for mobile behavior
function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(query);
        const onChange = () => setMatches(mq.matches);
        onChange();
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, [query]);

    return matches;
}

export default function Experiences() {
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // desktop accordion state
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // mobile: keep everything open
    const isMobile = useMediaQuery('(max-width: 768px)');

    // Timeline rail state
    const [marks, setMarks] = useState<{ year: number; top: number }[]>([]);
    const [activeYear, setActiveYear] = useState<number | null>(null);
    const [progressPx, setProgressPx] = useState(0);
    const [trackHeight, setTrackHeight] = useState(0);

    const items = MY_EXPERIENCE as ExperienceItem[];

    const yearFirstIndex = useMemo(() => {
        const map = new Map<number, number>();
        items.forEach((it, idx) => {
            const y = getStartYear(it.duration);
            if (!map.has(y)) map.set(y, idx);
        });

        return Array.from(map.entries())
            .sort((a, b) => b[0] - a[0])
            .map(([year, idx]) => ({ year, idx }));
    }, [items]);

    const yearAnchorRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 70%',
                    scrub: 0.5,
                },
            });

            tl.from('.exp-row', {
                y: 26,
                opacity: 0,
                stagger: 0.14,
                ease: 'none',
            });
        },
        { scope: containerRef },
    );

    useEffect(() => {
        const sectionEl = containerRef.current;
        const listEl = listRef.current;
        if (!sectionEl || !listEl) return;

        let raf = 0;

        const measure = () => {
            const sectionRect = sectionEl.getBoundingClientRect();
            const sectionHeight = sectionRect.height || 1;

            // a bit tighter on mobile so it doesn’t overflow
            const stickyViewportHeight =
                window.innerHeight - (isMobile ? 140 : 160);
            setTrackHeight(stickyViewportHeight);

            const nextMarks: { year: number; top: number }[] = [];

            yearFirstIndex.forEach(({ year }) => {
                const anchor = yearAnchorRefs.current[year];
                if (!anchor) return;

                const r = anchor.getBoundingClientRect();
                const offsetInSection = r.top - sectionRect.top;
                const ratio = offsetInSection / sectionHeight;

                const top = clamp(
                    ratio * stickyViewportHeight,
                    0,
                    stickyViewportHeight,
                );

                nextMarks.push({ year, top });
            });

            setMarks(nextMarks);

            const focusY = window.innerHeight * 0.4;
            let bestYear: number | null = null;
            let bestDist = Infinity;

            cardRefs.current.forEach((card, idx) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const centerY = rect.top + rect.height / 2;
                const dist = Math.abs(centerY - focusY);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestYear = getStartYear(items[idx].duration);
                }
            });

            setActiveYear(bestYear);

            const totalScrollable = sectionHeight - window.innerHeight;
            const scrolled = clamp(
                -sectionRect.top,
                0,
                totalScrollable <= 0 ? 0 : totalScrollable,
            );

            const progress =
                totalScrollable <= 0 ? 0 : scrolled / totalScrollable;

            setProgressPx(progress * stickyViewportHeight);
        };

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(measure);
        };

        const onResize = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(measure);
        };

        raf = requestAnimationFrame(measure);

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, [yearFirstIndex, items, isMobile]);

    return (
        <section
            id="my-experience"
            ref={containerRef}
            // prevents mobile navbar overlap when jumping here
            className="scroll-mt-28 md:scroll-mt-32 py-section mt-20 md:mt-32 mb-28 md:mb-40"
        >
            <div className="container">
                <SectionTitle title="My Experience" />

                {/* Timeline is now visible on mobile too */}
                <div className="mt-10 md:mt-14 grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] lg:grid-cols-[92px_1fr] gap-4 lg:gap-6">
                    <TimelineRail
                        marks={marks}
                        activeYear={activeYear}
                        progressPx={progressPx}
                        trackHeight={trackHeight}
                    />

                    <div ref={listRef} className="space-y-8 md:space-y-10">
                        {items.map((item, idx) => {
                            const isOpen = isMobile ? true : openIndex === idx;

                            const startYear = getStartYear(item.duration);
                            const isFirstOfYear = yearFirstIndex.some(
                                (y) => y.year === startYear && y.idx === idx,
                            );

                            const handleToggle = () => {
                                if (isMobile) return; // keep open on mobile
                                setOpenIndex(openIndex === idx ? null : idx);
                            };

                            return (
                                <div
                                    key={`${item.company}-${item.title}`}
                                    className="exp-row"
                                    ref={(el) => {
                                        cardRefs.current[idx] = el;
                                    }}
                                >
                                    {isFirstOfYear ? (
                                        <div
                                            ref={(el) => {
                                                yearAnchorRefs.current[
                                                    startYear
                                                ] = el;
                                            }}
                                            className="h-0"
                                        />
                                    ) : null}

                                    <button
                                        type="button"
                                        onClick={handleToggle}
                                        aria-expanded={isOpen}
                                        className={cn(
                                            'w-full text-left rounded-2xl px-5 py-5 md:px-8 md:py-8',
                                            'bg-background-light transition',
                                            !isMobile &&
                                                'hover:brightness-[1.03]',
                                        )}
                                    >
                                        <div className="flex flex-col gap-3 md:gap-4">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                {item.logo && (
                                                    <div className="h-10 w-10 md:h-11 md:w-11 shrink-0 rounded-xl bg-muted/10 flex items-center justify-center">
                                                        <Image
                                                            src={item.logo}
                                                            alt={`${item.company} logo`}
                                                            width={44}
                                                            height={44}
                                                            className="max-h-9 max-w-9 object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <p className="text-sm md:text-base text-muted-foreground">
                                                    {item.company}
                                                </p>
                                            </div>

                                            <div className="flex items-start justify-between gap-6">
                                                {/* a touch smaller on mobile to avoid cramped layout */}
                                                <h3 className="text-[2.35rem] md:text-6xl font-anton leading-[0.95]">
                                                    {item.title}
                                                </h3>

                                                {/* hide chevron on mobile since everything stays open */}
                                                {!isMobile && (
                                                    <span
                                                        className={cn(
                                                            'shrink-0 mt-1 text-sm md:text-base text-muted-foreground',
                                                            'transition-transform duration-300',
                                                            isOpen
                                                                ? 'rotate-180'
                                                                : 'rotate-0',
                                                        )}
                                                        aria-hidden
                                                    >
                                                        ▾
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="mt-3 text-base md:text-lg text-muted-foreground">
                                            {item.duration}
                                        </p>

                                        {/* Always open on mobile; accordion on desktop */}
                                        <div
                                            className={cn(
                                                'grid transition-all duration-300 ease-out',
                                                isOpen
                                                    ? 'grid-rows-[1fr] opacity-100 mt-6'
                                                    : 'grid-rows-[0fr] opacity-0 mt-0',
                                            )}
                                        >
                                            <div className="overflow-hidden">
                                                {item.highlights?.length ? (
                                                    <ul className="space-y-2 text-muted-foreground">
                                                        {item.highlights.map(
                                                            (h, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="flex gap-3"
                                                                >
                                                                    <span className="mt-[7px] size-1.5 rounded-full bg-primary shrink-0" />
                                                                    <span>
                                                                        {h}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                ) : null}

                                                {item.tools?.length ? (
                                                    <div className="mt-5 flex flex-wrap gap-2">
                                                        {item.tools.map((t) => (
                                                            <span
                                                                key={t.name}
                                                                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm"
                                                            >
                                                                {t.icon ? (
                                                                    <Image
                                                                        src={
                                                                            t.icon
                                                                        }
                                                                        alt={
                                                                            t.name
                                                                        }
                                                                        width={
                                                                            18
                                                                        }
                                                                        height={
                                                                            18
                                                                        }
                                                                    />
                                                                ) : null}
                                                                <span>
                                                                    {t.name}
                                                                </span>
                                                            </span>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
