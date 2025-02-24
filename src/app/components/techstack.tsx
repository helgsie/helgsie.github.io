import Image from 'next/image';

export default function Techstack({ image, text, color }) {
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