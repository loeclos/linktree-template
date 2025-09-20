import { DotScreenShader } from '@/components/ui/dot-shader-background';
import LinkComponent from '@/components/ui/link';
import Image from 'next/image';

export const dummyLinks = [
    { href: '/about', name: 'About' },
    { href: '/contact', name: 'Contact' },
    { href: '/projects', name: 'Projects' },
    { href: '/blog', name: 'Blog' },
    { href: '/services', name: 'Services' },
];

export default function Home() {
    return (
        <div className="h-svh font-sans  w-screen flex flex-col gap-8 items-center justify-center relative">
            <div className="absolute inset-0">
                <DotScreenShader />
            </div>
            <h1 className="text-6xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
                My Linktree
            </h1>
            <div className="flex flex-col gap-2 font-light tracking-tight mix-blend-exclusion text-white">
                {dummyLinks.map((link) => (
                    <LinkComponent key={link.name} {...link} />
                ))}
            </div>
            <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed pointer-events-none">
                Where thoughts take shape and consciousness flows like liquid
                mercury through infinite dimensions.
            </p>
        </div>
    );
}
