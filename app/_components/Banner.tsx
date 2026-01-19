// 'use client';

// import ArrowAnimation from '@/components/ArrowAnimation';
// import { GENERAL_INFO } from '@/lib/data';
// import React from 'react';
// import { Mail, Linkedin, FileText } from 'lucide-react';

// // just the first words
// const TYPEWRITER_WORDS = ['SOFTWARE', 'FRONTEND', 'DATA'];

// const RESUME_URL =
//     'https://drive.google.com/file/d/1aHenQI5Zafna8lQGCJQr_HbU30pLGlCR/view?usp=drive_link';

// const Banner = () => {
//     const [wordIndex, setWordIndex] = React.useState(0);
//     const [displayed, setDisplayed] = React.useState('');
//     const [isDeleting, setIsDeleting] = React.useState(false);

//     // Force dark mode always (and persist it)
//     React.useEffect(() => {
//         document.documentElement.classList.add('dark');
//         window.localStorage.setItem('theme', 'dark');
//     }, []);

//     // typewriter effect for first word
//     React.useEffect(() => {
//         const full = TYPEWRITER_WORDS[wordIndex];
//         const typingSpeed = isDeleting ? 70 : 110;
//         const pauseAtFull = 1500;
//         const pauseAtEmpty = 500;

//         const timeout = window.setTimeout(() => {
//             if (!isDeleting && displayed.length < full.length) {
//                 setDisplayed(full.slice(0, displayed.length + 1));
//             } else if (!isDeleting && displayed.length === full.length) {
//                 window.setTimeout(() => setIsDeleting(true), pauseAtFull);
//             } else if (isDeleting && displayed.length > 0) {
//                 setDisplayed(full.slice(0, displayed.length - 1));
//             } else if (isDeleting && displayed.length === 0) {
//                 setIsDeleting(false);
//                 setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
//                 window.setTimeout(() => {}, pauseAtEmpty);
//             }
//         }, typingSpeed);

//         return () => window.clearTimeout(timeout);
//     }, [displayed, isDeleting, wordIndex]);

//     const mailtoHref = `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
//         GENERAL_INFO.emailSubject,
//     )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`;

//     // Yellow base; on hover turn white + black text (including icon)
//     const ctaClass =
//         'inline-flex items-center gap-2 h-12 px-5 rounded-md bg-primary text-primary-foreground font-anton tracking-wider uppercase transition ' +
//         'hover:bg-white hover:text-black hover:[&>svg]:text-black';

//     const ctaClassCenter =
//         'inline-flex items-center justify-center gap-2 h-12 px-5 rounded-md bg-primary text-primary-foreground font-anton tracking-wider uppercase transition ' +
//         'hover:bg-white hover:text-black hover:[&>svg]:text-black';

//     return (
//         <section className="relative overflow-hidden" id="banner">
//             <ArrowAnimation />

//             <div className="container h-[100svh] min-h-[560px] flex items-center">
//                 {/* DESKTOP */}
//                 <div className="hidden lg:grid w-full items-center gap-8 grid-cols-[1.3fr_auto_auto]">
//                     {/* Left text */}
//                     <div className="max-w-[620px]">
//                         <p className="text-sm text-muted-foreground mb-4">
//                             Welcome to my Portfolio Website!
//                         </p>

//                         <h1 className="leading-[0.95] text-6xl sm:text-[82px] font-anton">
//                             <span className="text-primary inline-block min-w-[10ch]">
//                                 {displayed}
//                                 <span className="inline-block w-[2px] h-[1.1em] align-middle bg-primary ml-1 animate-pulse" />
//                             </span>
//                             <span className="block text-foreground/90 mt-1">
//                                 ENGINEER
//                             </span>
//                         </h1>

//                         <p className="mt-6 text-lg text-muted-foreground max-w-[560px]">
//                             Hi! I&apos;m{' '}
//                             <span className="font-medium text-foreground">
//                                 Syed Adhnan Moin
//                             </span>
//                             , a passionate engineer who loves taking ideas from
//                             scratch to production, solving real-world problems
//                             with scalable backends, data, and AI-driven systems.
//                         </p>

//                         {/* CTA Buttons (all yellow; hover -> white) */}
//                         <div className="mt-9 flex flex-wrap items-center gap-3">
//                             {/* Email */}
//                             <a href={mailtoHref} className={ctaClass}>
//                                 <Mail size={18} />
//                                 Email
//                             </a>

//                             {/* LinkedIn */}
//                             <a
//                                 href={
//                                     (GENERAL_INFO as any).linkedin ||
//                                     'https://www.linkedin.com/'
//                                 }
//                                 target="_blank"
//                                 rel="noreferrer noopener"
//                                 className={ctaClass}
//                             >
//                                 <Linkedin size={18} />
//                                 LinkedIn
//                             </a>

//                             {/* Resume */}
//                             <a
//                                 href={RESUME_URL}
//                                 target="_blank"
//                                 rel="noreferrer noopener"
//                                 className={ctaClass}
//                             >
//                                 <FileText size={18} />
//                                 Resume
//                             </a>
//                         </div>
//                     </div>

//                     {/* Photo – cut-out look */}
//                     <div className="flex justify-center lg:justify-center translate-y-[-40px]">
//                         <div className="relative">
//                             <div className="relative h-[340px] w-[340px] rounded-full overflow-hidden bg-background/10 ring-2 ring-white/10 ring-offset-[6px] ring-offset-background shadow-[0_18px_40px_rgba(0,0,0,0.65)]">
//                                 <img
//                                     src="/profile.jpg"
//                                     alt="Syed Adhnan Moin"
//                                     className="absolute inset-0 w-full h-full object-cover"
//                                     style={{ objectPosition: '50% 50%' }}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Stats */}
//                     <div className="absolute right-[4%] bottom-[6%] flex flex-col gap-6 text-right">
//                         <div>
//                             <div className="text-3xl font-anton text-primary leading-none">
//                                 2+
//                             </div>
//                             <div className="text-xs text-muted-foreground mt-1">
//                                 Years of Experience
//                             </div>
//                         </div>
//                         <div>
//                             <div className="text-3xl font-anton text-primary leading-none">
//                                 2+
//                             </div>
//                             <div className="text-xs text-muted-foreground mt-1">
//                                 Featured Projects
//                             </div>
//                         </div>
//                         <div>
//                             <div className="text-3xl font-anton text-primary leading-none">
//                                 10K+
//                             </div>
//                             <div className="text-xs text-muted-foreground mt-1">
//                                 Lines of Code Reviews
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* MOBILE */}
//                 <div className="lg:hidden w-full flex flex-col items-center text-center py-10">
//                     <p className="text-sm text-muted-foreground mb-4">
//                         Welcome to my Portfolio Website!
//                     </p>

//                     <h1 className="leading-[0.95] text-5xl font-anton">
//                         <span className="text-primary inline-block min-w-[10ch]">
//                             {displayed}
//                             <span className="inline-block w-[2px] h-[1.1em] align-middle bg-primary ml-1 animate-pulse" />
//                         </span>
//                         <span className="block text-foreground/90 mt-1">
//                             ENGINEER
//                         </span>
//                     </h1>

//                     <p className="mt-5 text-base text-muted-foreground max-w-[620px]">
//                         Hi! I&apos;m{' '}
//                         <span className="font-medium text-foreground">
//                             Syed Adhnan Moin
//                         </span>
//                         , a Software Engineer with 2+ years of experience
//                         building scalable backend systems, distributed services,
//                         and data-driven applications.
//                     </p>

//                     {/* CTA Buttons */}
//                     <div className="mt-7 grid grid-cols-1 gap-3 w-full max-w-[340px]">
//                         <a href={mailtoHref} className={ctaClassCenter}>
//                             <Mail size={18} />
//                             Email
//                         </a>

//                         <a
//                             href={
//                                 (GENERAL_INFO as any).linkedin ||
//                                 'https://www.linkedin.com/'
//                             }
//                             target="_blank"
//                             rel="noreferrer noopener"
//                             className={ctaClassCenter}
//                         >
//                             <Linkedin size={18} />
//                             LinkedIn
//                         </a>

//                         <a
//                             href={RESUME_URL}
//                             target="_blank"
//                             rel="noreferrer noopener"
//                             className={ctaClassCenter}
//                         >
//                             <FileText size={18} />
//                             Resume
//                         </a>
//                     </div>

//                     {/* Image + mini stats */}
//                     <div className="mt-10 flex flex-col items-center">
//                         <div className="relative">
//                             <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden bg-background/10 ring-2 ring-white/10 ring-offset-[6px] ring-offset-background shadow-[0_18px_40px_rgba(0,0,0,0.65)]">
//                                 <img
//                                     src="/profile.jpg"
//                                     alt="Syed Adhnan Moin"
//                                     className="absolute inset-0 w-full h-full object-cover"
//                                     style={{ objectPosition: '50% 50%' }}
//                                 />
//                             </div>
//                         </div>

//                         <div className="mt-4">
//                             <p className="text-base font-semibold">
//                                 Syed Adhnan Moin
//                             </p>
//                             <p className="text-sm text-muted-foreground">
//                                 Software Engineer
//                             </p>
//                         </div>

//                         <div className="mt-7 w-full max-w-[340px] grid grid-cols-3 gap-4">
//                             <div>
//                                 <div className="text-2xl font-anton text-primary leading-none">
//                                     2+
//                                 </div>
//                                 <div className="text-xs text-muted-foreground mt-1">
//                                     Experience
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="text-2xl font-anton text-primary leading-none">
//                                     5+
//                                 </div>
//                                 <div className="text-xs text-muted-foreground mt-1">
//                                     Projects
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="text-2xl font-anton text-primary leading-none">
//                                     10K+
//                                 </div>
//                                 <div className="text-xs text-muted-foreground mt-1">
//                                     Lines of Code Reviews
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;

'use client';

import ArrowAnimation from '@/components/ArrowAnimation';
import { GENERAL_INFO } from '@/lib/data';
import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

// just the first words
const TYPEWRITER_WORDS = ['SOFTWARE', 'FRONTEND', 'DATA'];

const RESUME_URL =
    'https://drive.google.com/file/d/1aHenQI5Zafna8lQGCJQr_HbU30pLGlCR/view?usp=drive_link';

const Banner = () => {
    const [wordIndex, setWordIndex] = React.useState(0);
    const [displayed, setDisplayed] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    // Force dark mode always (and persist it)
    React.useEffect(() => {
        document.documentElement.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
    }, []);

    // typewriter effect for first word
    React.useEffect(() => {
        const full = TYPEWRITER_WORDS[wordIndex];
        const typingSpeed = isDeleting ? 70 : 110;
        const pauseAtFull = 1500;
        const pauseAtEmpty = 500;

        const timeout = window.setTimeout(() => {
            if (!isDeleting && displayed.length < full.length) {
                setDisplayed(full.slice(0, displayed.length + 1));
            } else if (!isDeleting && displayed.length === full.length) {
                window.setTimeout(() => setIsDeleting(true), pauseAtFull);
            } else if (isDeleting && displayed.length > 0) {
                setDisplayed(full.slice(0, displayed.length - 1));
            } else if (isDeleting && displayed.length === 0) {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
                window.setTimeout(() => {}, pauseAtEmpty);
            }
        }, typingSpeed);

        return () => window.clearTimeout(timeout);
    }, [displayed, isDeleting, wordIndex]);

    const mailtoHref = `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
        GENERAL_INFO.emailSubject,
    )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`;

    // Yellow base; on hover turn white + black text (including icon)
    const ctaClass =
        'inline-flex items-center gap-2 h-12 px-5 rounded-md bg-primary text-primary-foreground font-anton tracking-wider uppercase transition ' +
        'hover:bg-white hover:text-black hover:[&>svg]:text-black';

    const ctaClassCenter =
        'inline-flex items-center justify-center gap-2 h-12 px-5 rounded-md bg-primary text-primary-foreground font-anton tracking-wider uppercase transition ' +
        'hover:bg-white hover:text-black hover:[&>svg]:text-black';

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />

            <div className="container h-[100svh] min-h-[560px] flex items-center">
                {/* DESKTOP */}
                <div className="hidden lg:grid w-full items-center gap-8 grid-cols-[1.3fr_auto_auto]">
                    {/* Left text */}
                    <div className="max-w-[620px]">
                        <p className="text-sm text-muted-foreground mb-4">
                            Welcome to my Portfolio Website!
                        </p>

                        <h1 className="leading-[0.95] text-6xl sm:text-[82px] font-anton">
                            <span className="text-primary inline-block min-w-[10ch]">
                                {displayed}
                                <span className="inline-block w-[2px] h-[1.1em] align-middle bg-primary ml-1 animate-pulse" />
                            </span>
                            <span className="block text-foreground/90 mt-1">
                                ENGINEER
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-muted-foreground max-w-[560px]">
                            Hi! I&apos;m{' '}
                            <span className="font-medium text-foreground">
                                Syed Adhnan Moin
                            </span>
                            , a passionate engineer who loves taking ideas from
                            scratch to production, solving real-world problems
                            with scalable backends, data, and AI-driven systems.
                        </p>

                        {/* CTA Buttons (all yellow; hover -> white) */}
                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            {/* Email */}
                            <a href={mailtoHref} className={ctaClass}>
                                <Mail size={18} />
                                Email
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={
                                    (GENERAL_INFO as any).linkedin ||
                                    'https://www.linkedin.com/'
                                }
                                target="_blank"
                                rel="noreferrer noopener"
                                className={ctaClass}
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>

                            {/* Resume */}
                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className={ctaClass}
                            >
                                <FileText size={18} />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Photo – cut-out look */}
                    <div className="flex justify-center lg:justify-center translate-y-[-40px]">
                        <div className="relative">
                            <div className="relative h-[340px] w-[340px] rounded-full overflow-hidden bg-background/10 ring-2 ring-white/10 ring-offset-[6px] ring-offset-background shadow-[0_18px_40px_rgba(0,0,0,0.65)]">
                                <img
                                    src="/profile.jpg"
                                    alt="Syed Adhnan Moin"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ objectPosition: '50% 50%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute right-[4%] bottom-[6%] flex flex-col gap-6 text-right">
                        <div>
                            <div className="text-3xl font-anton text-primary leading-none">
                                2+
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Years of Experience
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-anton text-primary leading-none">
                                2+
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Featured Projects
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-anton text-primary leading-none">
                                10K+
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Lines of Code Reviews
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOBILE */}
                <div className="lg:hidden w-full">
                    <div
                        className="
            min-h-[100svh] w-full overflow-y-auto
            flex flex-col items-center text-center
            px-2
            pt-[calc(96px+env(safe-area-inset-top))]
            pb-[calc(24px+env(safe-area-inset-bottom))]
            [@media(max-height:700px)]:pt-[calc(84px+env(safe-area-inset-top))]
            [@media(max-height:700px)]:pb-[calc(16px+env(safe-area-inset-bottom))]
        "
                    >
                        <p className="text-sm text-muted-foreground mb-3 [@media(max-height:700px)]:mb-2">
                            Welcome to my Portfolio Website!
                        </p>

                        <h1 className="leading-[0.92] font-anton">
                            <span
                                className="
                    text-primary inline-block min-w-[10ch]
                    text-[clamp(2.25rem,10vw,3.2rem)]
                    [@media(max-height:700px)]:text-[clamp(2.05rem,9.2vw,2.9rem)]
                "
                            >
                                {displayed}
                                <span className="inline-block w-[2px] h-[1.02em] align-middle bg-primary ml-1 animate-pulse" />
                            </span>

                            <span
                                className="
                    block text-foreground/90 mt-1
                    text-[clamp(2.05rem,9.5vw,3.0rem)]
                    [@media(max-height:700px)]:text-[clamp(1.95rem,9vw,2.75rem)]
                "
                            >
                                ENGINEER
                            </span>
                        </h1>

                        <p className="mt-4 text-[0.98rem] text-muted-foreground max-w-[620px] px-1 [@media(max-height:700px)]:mt-3">
                            Hi! I&apos;m{' '}
                            <span className="font-medium text-foreground">
                                Syed Adhnan Moin
                            </span>
                            , a Software Engineer with 2+ years of experience
                            building scalable backend systems, distributed
                            services, and data-driven applications.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-6 grid grid-cols-1 gap-3 w-full max-w-[360px] px-2 [@media(max-height:700px)]:mt-4">
                            <a
                                href={mailtoHref}
                                className={ctaClassCenter + ' h-11'}
                            >
                                <Mail size={18} />
                                Email
                            </a>

                            <a
                                href={
                                    (GENERAL_INFO as any).linkedin ||
                                    'https://www.linkedin.com/'
                                }
                                target="_blank"
                                rel="noreferrer noopener"
                                className={ctaClassCenter + ' h-11'}
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>

                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className={ctaClassCenter + ' h-11'}
                            >
                                <FileText size={18} />
                                Resume
                            </a>
                        </div>

                        {/* Image + mini stats */}
                        <div className="mt-8 flex flex-col items-center [@media(max-height:700px)]:mt-6">
                            <div className="relative">
                                <div
                                    className="
                        relative rounded-full overflow-hidden bg-background/10
                        ring-2 ring-white/10 ring-offset-[6px] ring-offset-background
                        shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                        w-[240px] h-[240px] sm:w-[260px] sm:h-[260px]
                        [@media(max-height:700px)]:w-[210px] [@media(max-height:700px)]:h-[210px]
                    "
                                >
                                    <img
                                        src="/profile.jpg"
                                        alt="Syed Adhnan Moin"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        style={{ objectPosition: '50% 50%' }}
                                    />
                                </div>
                            </div>

                            <div className="mt-4 pb-2 [@media(max-height:700px)]:mt-3">
                                <p className="text-base font-semibold leading-tight">
                                    Syed Adhnan Moin
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Software Engineer
                                </p>
                            </div>

                            <div className="mt-6 w-full max-w-[360px] grid grid-cols-3 gap-4 px-2 [@media(max-height:700px)]:mt-4">
                                <div>
                                    <div className="text-2xl font-anton text-primary leading-none">
                                        2+
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        Experience
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-anton text-primary leading-none">
                                        5+
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        Projects
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-anton text-primary leading-none">
                                        10K+
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                        Code Reviews
                                    </div>
                                </div>
                            </div>

                            <div className="h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
