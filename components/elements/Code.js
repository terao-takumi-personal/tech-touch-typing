import styles from '@/styles/components/elements/Code.module.css';

export default function Code({code, index}) {
    const typedWords = <span className={styles.typed} dangerouslySetInnerHTML={{__html: code.slice(0, index)}} />;
    const unTypedWords = <span className={styles.untyped} dangerouslySetInnerHTML={{__html: code.slice(index)}} />;

    return (
        <p>{typedWords}{unTypedWords}</p>
    );
}