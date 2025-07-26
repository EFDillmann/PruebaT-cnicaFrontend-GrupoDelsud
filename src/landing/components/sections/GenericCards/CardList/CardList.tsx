import Card from "../Card/Card";
import SectionTitle from "@/landing/components/ui/SectionTitle/SectionTitle";

import { genericCards } from "@/landing/utils/genericCards";

import styles from "./card-list.module.css";

import type { GenericCard } from "@/landing/types/generic-card.interface";

interface Props {
    cards?: GenericCard[];
}

const CardList = ({ cards = genericCards }: Props) => {
    return (
        <section className={styles["section-container"]}>
            <SectionTitle>
                Esto <span className="cyan-text">titula</span> una sección
            </SectionTitle>
            <ul className={styles["card-list"]}>
                {cards.map((card, index) => (
                    <li key={index}>
                        <Card {...card} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CardList;
