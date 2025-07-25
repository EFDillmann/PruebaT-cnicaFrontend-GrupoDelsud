import { PropsWithChildren } from "react";
import styles from "./hero.module.css";

const Hero = ({ children }: PropsWithChildren) => {
    return (
        <section className={styles.hero}>
            <p className={styles.text}>{children}</p>
        </section>
    );
};

export default Hero;
