import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./button.module.css";

interface ButtonProps
    extends PropsWithChildren,
        ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    rotate?: boolean;
    roundedFull?: boolean;
}

const Button = ({
    children,
    backgroundColor = "#0AAA9D",
    color = "white",
    rotate = false,
    roundedFull = false,
    onClick,
    disabled,
}: ButtonProps) => {
    return (
        <button
            style={{ backgroundColor, color }}
            className={`${rotate && styles.rotate} ${
                roundedFull && styles["rounded-full"]
            } ${styles.button}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
