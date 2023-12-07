import styles from '@/styles/components/layouts/WindowCenter.module.css';

export default function WindowCenter({children}) {
    return (
        <div className={styles.centering}>
            {children}
        </div>
    );
}