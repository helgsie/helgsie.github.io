import Card from '../components/card';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Projects() {
    return (
        <div className="w-5/6 mx-auto flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
            <Header/>
            <div>
                <h2 className="font-semibold font-mono text-3xl border-b-2 border-black border-dotted">Verkefni</h2>
            </div>
            <div className="w-full row-start-2 items-center mx-auto flex flex-col [&>*:nth-child(even)]:md:flex-row-reverse gap-16 md:gap-[10vw]">
                <Card 
                    image="/spotsie.png" 
                    title="spotsie"
                    description="React/Next.js vefsíða sem sækir og birtir hlustunargögnin mín frá Spotify API." 
                    link="https://spotsie.onrender.com" 
                    buttonColor="lightgray" 
                    buttonText="Skoða síðu"
                    width={500}
                    height={250}
                />
                <Card 
                    image="/menningarnott.png" 
                    title="viðburðakerfi" 
                    description="Viðburðakerfi fyrir dagskrá menningarnótt." 
                    link="https://vef2-vidburdakerfi.onrender.com" 
                    buttonColor="lightgray" 
                    buttonText="Skoða síðu"
                    width={500}
                    height={250}
                />
                <Card 
                    image="/pokeapi.png" 
                    title="pokedex" 
                    description="Einföld leitarvél fyrir gögn sótt af PokéAPI." 
                    link="https://vef-pokedex.netlify.app" 
                    buttonColor="lightgray" 
                    buttonText="Skoða síðu"
                    width={500}
                    height={250}
                />
                <Card 
                    image="/spurningaleikur.png" 
                    title="spurningaleikur" 
                    description="Spurningaleikur með PostgreSQL gagnagrunn og hýsingu á Render." 
                    link="https://vef2-v4-gjvc.onrender.com" 
                    buttonColor="lightgray" 
                    buttonText="Skoða síðu"
                    width={500}
                    height={250}
                />
            </div>
            <Footer/>
        </div>
    );
}