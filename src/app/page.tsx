import Hero from "@/landing/components/sections/Hero/Hero";
import Navbar from "@/landing/components/sections/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <header id="header">
                <Navbar />
            </header>
            <main id="main">
                <Hero />
            </main>
            <footer id="footer"></footer>
        </>
    );
}
