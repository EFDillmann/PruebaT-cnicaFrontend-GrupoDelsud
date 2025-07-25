import Logo from "@/landing/components/Logo/Logo";
import NavigationListItem from "@/landing/components/NavigationListItem/NavigationListItem";

import Image from "next/image";

import styles from "./navbar.module.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo />

            <button className={styles["ham-menu-button"]}>
                <Image
                    src="/svgs/ham-menu.svg"
                    alt="Hamburger menú icon"
                    width={24}
                    height={24}
                    unoptimized
                />
            </button>

            <div className={styles["options-container"]}>
                <NavigationListItem />
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default Navbar;
