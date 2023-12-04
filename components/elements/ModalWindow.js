import styles from '@/styles/components/elements/ModalWindow.module.css';

export default function ModalWindow({children}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.window}>
                {children}
            </div>
        </div>
    );
}