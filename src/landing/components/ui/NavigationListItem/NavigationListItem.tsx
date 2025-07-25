import Link from "next/link";

import { sections } from "@/landing/utils/sections";

import styles from "./navigation-list-item.module.css";

import type { NavigationItem } from "@/landing/types/navigation-item.interface";
interface Props {
    items?: NavigationItem[];
    direction?: "row" | "column";
}

const NavigationList = ({ items = sections, direction = "row" }: Props) => {
    return (
        <ul
            className={styles.navigationListItem}
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
