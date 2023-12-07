import styles from '@/styles/components/layouts/WindowTop.module.css';

export default function WindowTop({children}) {
    return (
        <div className={styles.centering}>
            {children}
        </div>
    );
}