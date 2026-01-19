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
    /** Height of the rail track area (px) so fill can clamp correctly */
    trackHeight: number;
};

export default function TimelineRail({
    marks,
    progressPx,
    activeYear,
    trackHeight,
}: Props) {
    // x position for the vertical line inside this rail column
    const lineX = 34;

    return (
        <aside className="hidden lg:block w-[92px]">
            {/* Sticky rail */}
            <div className="sticky top-24">
                <div
                    className="relative"
                    style={{ height: trackHeight || 'calc(100vh - 160px)' }}
                >
                    {/* Base line (more visible) */}
                    <div
                        className="absolute top-0 bottom-0"
                        style={{ left: lineX }}
                    >
                        <div className="h-full w-[2px] bg-foreground/40 rounded-full" />
                    </div>

                    {/* Fill line (animated via inline height) */}
                    <div className="absolute top-0" style={{ left: lineX }}>
                        <div
                            className="w-[2px] bg-primary rounded-full origin-top"
                            style={{
                                height: `${Math.max(
                                    0,
                                    Math.min(progressPx, trackHeight),
                                )}px`,
                            }}
                        />
                    </div>

                    {/* Year marks */}
                    {marks.map((m) => {
                        const isActive = activeYear === m.year;

                        return (
                            <div
                                key={m.year}
                                className="absolute"
                                style={{ top: m.top, left: 0 }}
                            >
                                {/* Label */}
                                <div
                                    className={cn(
                                        'absolute -left-1 -translate-x-full -translate-y-2 text-xs tracking-wide',
                                        isActive
                                            ? 'text-foreground'
                                            : 'text-muted-foreground',
                                    )}
                                >
                                    {m.year}
                                </div>

                                {/* Dot */}
                                <div
                                    className={cn(
                                        // ⬅️ add -translate-x-1/2 here
                                        'absolute -translate-x-1/2 -translate-y-1/2',
                                        isActive ? 'opacity-100' : 'opacity-70',
                                    )}
                                    style={{ left: lineX }}
                                >
                                    <div
                                        className={cn(
                                            'size-3 rounded-full border',
                                            isActive
                                                ? 'bg-primary border-primary shadow-[0_0_0_6px_rgba(0,255,0,0.08)]'
                                                : 'bg-background border-foreground/30',
                                        )}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
