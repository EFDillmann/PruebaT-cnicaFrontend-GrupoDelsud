import Hero from "@/landing/components/Hero/Hero";
import Navbar from "@/landing/components/Navbar/Navbar";

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
