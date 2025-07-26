"use client";

import SectionTitle from "@/landing/components/ui/SectionTitle/SectionTitle";
import Button from "@/landing/components/ui/Button/Button";

import Image from "next/image";

import useSlider from "@/landing/hooks/useSlider";

import styles from "./sponsors.module.css";

const Sponsors = () => {
    const sponsors = Array.from({ length: 7 }).map((_, index) => ({
        name: `Sponsor ${index + 1}`,
        image: `/sponsors/sponsor-delsud.webp`,
    }));

    const { currentItem, next, prev, hasNext, hasPrev } = useSlider({
        items: sponsors,
    });

    return (
        <section className={styles["sponsors-section"]}>
            <SectionTitle>
                <span className="cyan-text">Sponsors</span> del proyecto
            </SectionTitle>

            <article className={styles.slider}>
                <Button
                    onClick={prev}
                    disabled={!hasPrev}
                    roundedFull={true}
                    rotate={true}
                    backgroundColor="#ffffff"
                >
                    <Image
                        src="/svgs/cyan-arrow.svg"
                        alt="Left arrow"
                        width={14}
                        height={14}
                        unoptimized
                        priority
                    />
                </Button>

                <Image
                    src={currentItem.image}
                    alt={currentItem.name}
                    width={145}
                    height={24}
                />

                <Button
                    onClick={next}
                    disabled={!hasNext}
                    roundedFull={true}
                    backgroundColor="#ffffff"
                >
                    <Image
                        src="/svgs/cyan-arrow.svg"
                        alt="Right arrow"
                        width={14}
                        height={14}
                        unoptimized
                        priority
                    />
                </Button>
            </article>

            <ul className={styles["sponsor-list"]}>
                {sponsors.map((sponsor, index) => (
                    <li key={index}>
                        <Image
                            src={sponsor.image}
                            alt={sponsor.name}
                            width={145}
                            height={24}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Sponsors;
