import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

type LinkProps = {
    href: string;
    name: string;
    className?: string;
};

export default function LinkComponent({ href, name, className }: LinkProps) {
    return (
        <Link className="h-full w-full" href={`${href}`}>
            <Button className={`h-full w-full py-4 px-32 lg:px-45 rounded-2xl rounded-tr-sm border border-zinc-500/50 hover:border-zinc-400/50 bg-zinc-900/50 transition-colors duration-300 cursor-pointer ${className}`}>
                <span className='w-full'>{name}</span>
                <span className='w-full flex justify-end'><ArrowUpRight /></span>
            </Button>
        </Link>
    );
}
