import AboutText from "@/landing/components/sections/About/AboutText";
import Banner from "@/landing/components/sections/Banner/Banner";
import Contact from "@/landing/components/sections/Contact/Contact";
import CardList from "@/landing/components/sections/GenericCards/CardList/CardList";
import Hero from "@/landing/components/sections/Hero/Hero";
import Navbar from "@/landing/components/sections/Navbar/Navbar";
import Sponsors from "@/landing/components/sections/Sponsors/Sponsors";

export default function Home() {
    return (
        <>
            <header id="header" className="container">
                <Navbar />
                <Hero>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit{" "}
                    <span className="cyan-text">
                        interdum, ac aliquet odio mattis.
                    </span>
                </Hero>
                <AboutText>
                    <span className="cyan-text">
                        Lorem ipsum dolor sit amet consectetur
                    </span>{" "}
                    <b>a</b>liquet imperdiet <b>penatibus donec velit.</b> A
                    faucibus eget et vulputate dapibus congue enim massa.. Sem
                    semper odio volutpat{" "}
                    <span className="cyan-text">
                        risus platea nulla diam id dis..
                    </span>
                </AboutText>
            </header>
            <main id="main">
                <CardList />
                <Sponsors />
            </main>
            <footer id="footer">
                <Banner>
                    Lorem{" "}
                    <span className="cyan-text">
                        ipsum dolor sit amet consectetur
                    </span>{" "}
                    <b>a</b>liquet imperdiet
                    <span className="cyan-text"> penatibus donec velit.</span>
                </Banner>
                <Contact />
            </footer>
        </>
    );
}
