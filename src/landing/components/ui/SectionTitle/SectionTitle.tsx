import { PropsWithChildren } from "react";

import styles from "./section-title.module.css";

const SectionTitle = ({ children }: PropsWithChildren) => {
    return <h2 className={styles["section-title"]}>{children}</h2>;
};

export default SectionTitle;
