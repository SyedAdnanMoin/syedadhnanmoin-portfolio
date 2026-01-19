// 'use client';

// import React from 'react';
// import { cn } from '@/lib/utils';

// type YearMark = {
//     year: number;
//     top: number; // px within the rail track
// };

// type Props = {
//     marks: YearMark[];
//     progressPx: number; // how much of the rail is "filled" (px)
//     activeYear: number | null;
//     /** Height of the rail track area (px) so fill can clamp correctly */
//     trackHeight: number;
// };

// export default function TimelineRail({
//     marks,
//     progressPx,
//     activeYear,
//     trackHeight,
// }: Props) {
//     // x position for the vertical line inside this rail column
//     const lineX = 34;

//     return (
//         <aside className="hidden lg:block w-[92px]">
//             {/* Sticky rail */}
//             <div className="sticky top-24">
//                 <div
//                     className="relative"
//                     style={{ height: trackHeight || 'calc(100vh - 160px)' }}
//                 >
//                     {/* Base line (more visible) */}
//                     <div
//                         className="absolute top-0 bottom-0"
//                         style={{ left: lineX }}
//                     >
//                         <div className="h-full w-[2px] bg-foreground/40 rounded-full" />
//                     </div>

//                     {/* Fill line (animated via inline height) */}
//                     <div className="absolute top-0" style={{ left: lineX }}>
//                         <div
//                             className="w-[2px] bg-primary rounded-full origin-top"
//                             style={{
//                                 height: `${Math.max(
//                                     0,
//                                     Math.min(progressPx, trackHeight),
//                                 )}px`,
//                             }}
//                         />
//                     </div>

//                     {/* Year marks */}
//                     {marks.map((m) => {
//                         const isActive = activeYear === m.year;

//                         return (
//                             <div
//                                 key={m.year}
//                                 className="absolute"
//                                 style={{ top: m.top, left: 0 }}
//                             >
//                                 {/* Label */}
//                                 <div
//                                     className={cn(
//                                         'absolute -left-1 -translate-x-full -translate-y-2 text-xs tracking-wide',
//                                         isActive
//                                             ? 'text-foreground'
//                                             : 'text-muted-foreground',
//                                     )}
//                                 >
//                                     {m.year}
//                                 </div>

//                                 {/* Dot */}
//                                 <div
//                                     className={cn(
//                                         // add -translate-x-1/2 here
//                                         'absolute -translate-x-1/2 -translate-y-1/2',
//                                         isActive ? 'opacity-100' : 'opacity-70',
//                                     )}
//                                     style={{ left: lineX }}
//                                 >
//                                     <div
//                                         className={cn(
//                                             'size-3 rounded-full border',
//                                             isActive
//                                                 ? 'bg-primary border-primary shadow-[0_0_0_6px_rgba(0,255,0,0.08)]'
//                                                 : 'bg-background border-foreground/30',
//                                         )}
//                                     />
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </aside>
//     );
// }

// for Mobile version

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type YearMark = {
    year: number;
    top: number; // px within the rail track
};

type Props = {
    marks: YearMark[];
    progressPx: number; // how much of the rail is "filled" (px)
    activeYear: number | null;
    trackHeight: number;
};

export default function TimelineRail({
    marks,
    progressPx,
    activeYear,
    trackHeight,
}: Props) {
    //slightly tighter x on mobile
    const lineX = 22;
    const railWidth = 64;

    return (
        <aside className="block w-[64px] sm:w-[72px] lg:w-[92px]">
            <div
                className={cn(
                    'sticky',
                    // keep it below navbar
                    'top-24 md:top-28',
                )}
                style={{ height: trackHeight }}
            >
                {/* Track */}
                <div className="relative h-full w-full">
                    {/* Base line */}
                    <div
                        className="absolute top-0 bottom-0 rounded-full bg-border/60"
                        style={{ left: lineX, width: 2 }}
                    />

                    {/* Progress fill */}
                    <div
                        className="absolute top-0 rounded-full bg-primary"
                        style={{
                            left: lineX,
                            width: 2,
                            height: Math.max(
                                0,
                                Math.min(trackHeight, progressPx),
                            ),
                        }}
                    />

                    {/* Year dots */}
                    {marks.map((m) => {
                        const isActive = activeYear === m.year;
                        return (
                            <div
                                key={m.year}
                                className="absolute"
                                style={{
                                    top: m.top,
                                    left: 0,
                                    width: railWidth,
                                }}
                            >
                                <div className="relative">
                                    {/* dot */}
                                    <div
                                        className={cn(
                                            'absolute rounded-full border',
                                            isActive
                                                ? 'bg-primary border-primary'
                                                : 'bg-background border-border',
                                        )}
                                        style={{
                                            left: lineX - 5,
                                            width: 12,
                                            height: 12,
                                            top: -6,
                                        }}
                                    />

                                    {/* year label */}
                                    <div
                                        className={cn(
                                            'absolute -translate-y-1/2 text-[11px] sm:text-xs tracking-widest font-medium',
                                            isActive
                                                ? 'text-foreground'
                                                : 'text-muted-foreground',
                                        )}
                                        style={{
                                            left: lineX + 14,
                                            top: 0,
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {m.year}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
