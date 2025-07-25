import Image from "next/image";

import styles from "./card.module.css";

import type { GenericCard } from "@/landing/types/generic-card.interface";

const Card = ({ imageSrc, imageAlt, title }: GenericCard) => {
    return (
        <article className={styles["card"]}>
            <div className={styles["image-container"]}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="responsive"
                    width={248}
                    height={272}
                />
            </div>
            <h3 className={styles.title}>{title}</h3>
        </article>
    );
};

export default Card;
