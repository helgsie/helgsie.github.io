import Header from './components/header';
import Footer from './components/footer';
import Textbox from './components/textbox';

export default function Home() {
  return (
    <div className="w-5/6 mx-auto flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="w-full flex flex-col gap-32">
        <Textbox/>
      </main>
      <Footer/>
    </div>
  );
}
