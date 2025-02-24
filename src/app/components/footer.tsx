import Link from './link';

export default function Footer() {
    return (
      <footer className="border-t mt-10 pb-10 row-start-3 flex gap-6 flex-wrap items-center justify-center pt-4">
        <Link image="/nextjs-github-pages/github-mark.svg" text="github.com/helgsie" link="https://github.com/helgsie"/>
        <Link image="/nextjs-github-pages/email.png" text="hbh54@hi.is" link="#"/>
      </footer>
    );
}
