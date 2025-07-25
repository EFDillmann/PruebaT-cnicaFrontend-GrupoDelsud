import Link from "next/link";

import { sections } from "@/landing/utils/sections";

import styles from "./navigation-list.module.css";

import type { NavigationItem } from "@/landing/types/navigation-item.interface";
interface Props {
    items?: NavigationItem[];
    direction?: "row" | "column";
    inFooter?: boolean;
}

const NavigationList = ({
    items = sections,
    direction = "row",
    inFooter = false,
}: Props) => {
    return (
        <ul
            className={
                inFooter
                    ? styles["navigation-list-footer"]
                    : styles["navigation-list"]
            }
            style={{ flexDirection: direction }}
        >
            {items.map((item) => (
                <li key={item.path}>
                    <Link href={item.path} className={styles.link}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavigationList;
