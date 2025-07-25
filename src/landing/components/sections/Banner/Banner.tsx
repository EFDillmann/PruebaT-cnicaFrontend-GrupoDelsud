import { PropsWithChildren } from "react";

import Button from "../../ui/Button/Button";

import styles from "./banner.module.css";

const Banner = ({ children }: PropsWithChildren) => {
    return (
        <section className={styles.banner}>
            <p className={styles.text}>{children}</p>

            <Button>Esto es un botón</Button>
        </section>
    );
};

export default Banner;
