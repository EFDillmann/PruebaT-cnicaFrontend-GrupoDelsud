"use client";

import { useState } from "react";

import { languages } from "@/landing/utils/languages";

import styles from "./laguage-selector.module.css";

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<
        "es" | "en" | "br"
    >("es");

    const handleLanguageChange = (language: "es" | "en" | "br") => {
        setSelectedLanguage(language);
    };

    return (
        <article className={styles["language-selector"]}>
            {languages.map((language) => (
                <button
                    key={language.value}
                    onClick={() => handleLanguageChange(language.value)}
                    className={`${styles["language-item"]} ${
                        language.value === selectedLanguage
                            ? styles["selected-language"]
                            : ""
                    }`}
                >
                    {language.label}
                </button>
            ))}
        </article>
    );
};

export default LanguageSelector;
