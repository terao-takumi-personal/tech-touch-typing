import styles from '@/styles/components/elements/MainTheme.module.css';

export default function MainTheme({children}) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}