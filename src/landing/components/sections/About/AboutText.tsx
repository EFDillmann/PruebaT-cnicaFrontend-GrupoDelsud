import { PropsWithChildren } from "react";

import styles from "./about-text.module.css";
import Image from "next/image";

const AboutText = ({ children }: PropsWithChildren) => {
    return (
        <section className={styles["about-text"]}>
            <p className={styles.text}>{children}</p>

            <div className={styles["dna-icon"]}>
                <Image
                    src="/svgs/dna.svg"
                    alt="Dna icon"
                    layout="responsive"
                    width={24}
                    height={24}
                    unoptimized
                    priority
                />
            </div>
        </section>
    );
};

export default AboutText;
