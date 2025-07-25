import Logo from "../../ui/Logo/Logo";
import NavigationList from "../../ui/NavigationList/NavigationList";

import { socialLinks } from "@/landing/utils/socialLinks";

import styles from "./contact.module.css";

import type { SocialLink } from "@/landing/types/social-link.interface";
import Image from "next/image";

interface Props {
    socialData?: SocialLink[];
}

const Contact = ({ socialData = socialLinks }: Props) => {
    return (
        <section className={styles.contact}>
            <div className={styles["logo-container"]}>
                <Logo color="#ffffff" />
            </div>

            <div className={styles["footer-nav"]}>
                <h4 className={styles["footer-nav-title"]}>Menú</h4>

                <NavigationList direction="column" inFooter={true} />
            </div>

            <div className={styles["contact-info"]}>
                <h4 className={styles["contact-info-title"]}>Contacto</h4>

                <p className={styles["contact-info-text"]}>
                    <b>@</b> correo@empresa.com
                </p>

                <ul className={styles["social-link-list"]}>
                    {socialData.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.link}
                                target="_blank"
                                className={styles["social-link"]}
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    width={18}
                                    height={18}
                                    unoptimized
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
