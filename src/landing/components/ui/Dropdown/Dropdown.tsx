import { Question } from "@/landing/types/question.interface";

import Image from "next/image";

import styles from "./dropdown.module.css";

const Dropdown = ({ question, answer }: Question) => {
    return (
        <details className={styles.dropdown}>
            <summary className={styles["dropdown-question"]}>
                {question}{" "}
                <div className={styles["arrow-container"]}>
                    <div className={styles.arrow}>
                        <Image
                            src="/svgs/arrow-down.svg"
                            alt="Arrow down"
                            width={7}
                            height={4}
                            layout="responsive"
                            unoptimized
                        />
                    </div>
                </div>
            </summary>
            <p className={styles["dropdown-answer"]}>{answer}</p>
        </details>
    );
};

export default Dropdown;
