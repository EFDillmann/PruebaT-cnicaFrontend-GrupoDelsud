import Link from "next/link";

import styles from "./navigation-list-item.module.css";

import { sections } from "@/landing/utils/sections";

interface NavigationItem {
    label: string;
    path: string;
}

interface Props {
    items?: NavigationItem[];
    direction?: "row" | "column";
}

const NavigationListItem = ({ items = sections, direction = "row" }: Props) => {
    return (
        <li
            className={styles.navigationListItem}
            style={{ flexDirection: direction }}
        >
            {items.map((item) => (
                <Link key={item.path} href={item.path} className={styles.link}>
                    {item.label}
                </Link>
            ))}
        </li>
    );
};

export default NavigationListItem;
