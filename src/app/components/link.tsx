import Image from 'next/image';

export default function Link({ image, text, link }) {
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