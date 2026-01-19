import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import Script from 'next/script';

const anton = Anton({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-anton',
});

const roboto_flex = Roboto_Flex({
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Portfolio - Syed Adhnan Moin',
    description:
        'Software Engineer specializing in backend services, distributed systems, and data-driven applications.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${anton.variable} ${roboto_flex.variable} antialiased`}
            >
                <ReactLenis root options={{ lerp: 0.09 }}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>

                <Script id="disable-devtools" strategy="afterInteractive">
                    {`(function(){try{if(process.env.NODE_ENV!=="production")return;}catch(e){};})();`}
                </Script>
            </body>
        </html>
    );
}
