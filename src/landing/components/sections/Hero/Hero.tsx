import styles from "./hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit{" "}
                <span className="cyan-text">
                    interdum, ac aliquet odio mattis.
                </span>
            </p>
        </section>
    );
};

export default Hero;
