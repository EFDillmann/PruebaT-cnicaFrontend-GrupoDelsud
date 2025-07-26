import Image from "next/image";

import styles from "./testimonial-card.module.css";

import type { Testimony } from "@/landing/types/testimony.interface";

interface Props {
    item: Testimony;
}

const TestimonialCard = ({ item }: Props) => {
    return (
        <article className={`${styles.card}`}>
            <Image
                src={item.image}
                alt={item.name}
                className={styles["profile-pic"]}
                width={54}
                height={54}
            />
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.testimony}>{item.testimony}</p>
        </article>
    );
};

export default TestimonialCard;
