'use client';

import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

type Props = {
    title: string;
    className?: string;
};

export default function SectionTitle({ title, className }: Props) {
    return (
        <div className={cn('flex items-center gap-4 mb-10', className)}>
            <Icon
                icon="eos-icons:rotating-gear"
                className={cn(
                    // match ~25px icon from the reference
                    // 'w-[28px] h-[28px] text-primary animate-spin',
                    'w-[32px] h-[32px] text-primary animate-spin',
                    // match slower spin like the reference
                    '[animation-duration:4000ms]',
                )}
            />

            <h2 className="text-xl uppercase leading-none">{title}</h2>
        </div>
    );
}
