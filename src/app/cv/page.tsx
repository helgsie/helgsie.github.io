import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="w-5/6 mx-auto flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <Header/>
            <div>
                <h2 className="font-semibold font-mono text-3xl border-b-2 border-black border-dotted">Ferilskrá</h2>
            </div>
        <main className="w-full flex flex-col gap-32 items-center">
            <p>Í vinnslu</p>
        </main>
        <Footer/>
    </div>
  );
}