import Image from 'next/image';
import { FC } from 'react';

interface TechstackProps {
    image: string;
    text: string;
    color: string;
}

const Techstack: FC<TechstackProps> = ({ image, text, color }) => {
    return (
        <div className={`${color} p-1 rounded-full`}>
            {image && (
                <Image
                    aria-hidden
                    src={image}
                    alt="Techstack icon"
                    width={16}
                    height={16}
                />
            )}
            {text}
        </div>
    );
}

export default Techstack;