"use client";

import { CSSProperties } from "react";

import Button from "../../../ui/Button/Button";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import Image from "next/image";

import styles from "./testimonial-carrousel.module.css";

import type { Testimony } from "@/landing/types/testimony.interface";
import SectionTitle from "@/landing/components/ui/SectionTitle/SectionTitle";
import useCarrousel from "@/landing/hooks/useCarrousel";

export const testimonialData: Testimony[] = [
    {
        name: "Daniel",
        company: "Empresa 1",
        testimony:
            "Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..",
        image: "/profiles/profile-pic-daniel.webp",
    },
    {
        name: "Franco",
        company: "Empresa 2",
        testimony:
            "Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.",
        image: "/profiles/profile-pic-franco.webp",
    },
    {
        name: "Eugenia",
        company: "Empresa 3",
        testimony:
            "Lorem ipsum dolor sit amet consectetur. Mauris mauris ipsum sit egestas in.. Velit vitae eget pharetra adipiscing ut sit egestas condimentum.. Praesent enim ullamcorper ultrices est. Duis pellentesque mi ultrices sit vel.. Consequat ut velit id mi in..",
        image: "/profiles/profile-pic-eugenia.webp",
    },
];

interface Props {
    testimonies?: Testimony[];
}

const TestimonialCarrousel = ({ testimonies = testimonialData }: Props) => {
    const { desktopOffset, mobileOffset, handleNext, handlePrev } =
        useCarrousel({ items: testimonies });

    if (!testimonies || testimonies.length === 0) {
        return null;
    }

    return (
        <section className={styles["carousel-container"]}>
            <SectionTitle>
                Sector de <span className="cyan-text">testimonios</span>
            </SectionTitle>

            <div className={styles["carousel-window"]}>
                <ul
                    className={styles["carousel-track"]}
                    style={
                        {
                            "--desktop-offset": `${desktopOffset}%`,
                            "--mobile-offset": `${mobileOffset}%`,
                        } as CSSProperties
                    }
                >
                    {testimonies.map((item, index) => (
                        <TestimonialCard key={index} item={item} />
                    ))}
                </ul>
            </div>

            <footer className={styles["nav-buttons"]}>
                <Button
                    onClick={handlePrev}
                    roundedFull={true}
                    rotate={true}
                    backgroundColor="#0AAA9D"
                >
                    <Image
                        src="/svgs/white-arrow.svg"
                        alt="Right arrow"
                        width={14}
                        height={14}
                        unoptimized
                        priority
                    />
                </Button>
                <Button
                    onClick={handleNext}
                    roundedFull={true}
                    backgroundColor="#0AAA9D"
                >
                    <Image
                        src="/svgs/white-arrow.svg"
                        alt="Right arrow"
                        width={14}
                        height={14}
                        unoptimized
                        priority
                    />
                </Button>
            </footer>
        </section>
    );
};

export default TestimonialCarrousel;
