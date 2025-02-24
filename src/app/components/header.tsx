import Image from "next/image";
import Link from 'next/link';

export default function Component() {
    return (
        <header className="pt-8 pb-4 w-full flex flex-col sm:flex-row gap-4 items-center sm:justify-self-start sm:justify-between">
            <div className="flex flex-row gap-6 sm:gap-3 items-center justify-center">
                <Image
                className="dark:invert"
                src="/favicon.ico"
                alt="Slaufa"
                width={20}
                height={20}
                priority
                />
                <Link href="/" className="text-5xl sm:text-2xl font-semibold">helgsie</Link>
                <Image
                className="dark:invert"
                src="/favicon.ico"
                alt="Slaufa"
                width={20}
                height={20}
                priority
                />
            </div>
            <div className="flex flex-row gap-[4vw]">
                <Link href="/cv" className="hover:underline">Ferilskrá</Link>
                <Link href="/projects" className="hover:underline">Verkefni</Link>
            </div>
        </header>
    );
}