import Image from 'next/image';
import { Button, ButtonColor } from './button';
import { FC } from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    buttonColor: ButtonColor;
    buttonText: string;
    width: number;
    height: number;
}

const Card: FC<CardProps> = ({
    image, 
    title, 
    description, 
    link, 
    buttonColor, 
    buttonText, 
    width, 
    height
}) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center content-center gap-4 md:gap-16">
            <Image
                className="md:max-w-[50vw] dark:invert border-transparent rounded-xl shadow-md transition duration-300 ease-in-out hover:-translate-y-1"
                src={image}
                alt="Screenshot of project website"
                width={width}
                height={height}
            />
            <div className="flex flex-col gap-3 self-start md:self-center">
                <h2 className="font-semibold text-3xl">{title}</h2>
                <p className="text-lg text-zinc-600">{description}</p>
                <Button color={buttonColor} text={buttonText} link={link}/>
            </div>
        </div>
    );
}

export default Card;