import styles from '@/styles/components/elements/GameText.module.css';
export default function GameText({text}) {
    return (
        <p className={styles.text}>{text}</p>
    );
}