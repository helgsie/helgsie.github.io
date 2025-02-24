import Image from 'next/image';
import { FC } from 'react';

export type ButtonColor = 'transparent' | 'black' | 'rose' | 'cyan' | 'lightgray';

interface ButtonProps {
    color: ButtonColor;
    text: string;
    image?: string;
    link: string;
}

export const Button: FC<ButtonProps> = ({ color, text, image, link }) => {
    const colors = {
        transparent: "hover:bg-[#f2f2f2] hover:border-transparent dark:hover:bg-[#1a1a1a]",
        black: "border-black/[.08] hover:bg-[#383838] dark:border-white/[.145] dark:hover:bg-[#ccc] bg-foreground text-background",
        rose: "bg-rose-300 border-rose-300 hover:bg-rose-400",
        cyan: "bg-cyan-200 border-cyan-200 hover:bg-cyan-300",
        lightgray: "bg-[#f2f2f2] border-[#f2f2f2] hover:bg-[#d9d9d9]"
    };

    const imageClass = "sm:min-w-44 gap-2";

    return (
        <a
            className={`rounded-full border border-solid transition-colors flex self-start items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${colors[color]} ${image ? imageClass : ''}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >   {image && (
                <Image
                    className="dark:invert"
                    src={image}
                    alt="Button image"
                    width={20}
                    height={20}
                />
            )}
            {text}
        </a>
    );
}

export default Button;