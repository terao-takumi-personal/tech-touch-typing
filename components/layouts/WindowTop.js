import styles from '@/styles/components/layouts/windowTop.module.css';

export default function WindowTop({children}) {
    return (
        <div className={styles.centering}>
            {children}
        </div>
    );
}