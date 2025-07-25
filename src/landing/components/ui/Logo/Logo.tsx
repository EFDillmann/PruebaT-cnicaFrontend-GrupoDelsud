import styles from "./logo.module.css";

interface Props {
    color?: string;
}

const Logo = ({ color = "#0AAA9D" }: Props) => {
    return (
        <article className={styles.logoContainer}>
            <div
                className={styles.squareLogo}
                style={{ backgroundColor: color }}
            />
            <h1 className={styles.textLogo} style={{ color }}>
                LOGO EMPRESA
            </h1>
        </article>
    );
};

export default Logo;
