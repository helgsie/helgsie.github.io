import Image from 'next/image';
import { FC } from 'react';

interface LinkProps {
    image: string;
    text: string;
    link: string;
}

const Link: FC<LinkProps> = ({ image, text, link }) => {
    return (
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
            {image && (
                <Image
                    aria-hidden
                    src={image}
                    alt="File icon"
                    width={16}
                    height={16}
                />
            )}
            {text}
        </a>
    );
}

export default Link;