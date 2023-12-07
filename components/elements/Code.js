import styles from "@/styles/components/elements/Code.module.css";

export default function Code({ code, index }) {
  const typedWords = (
    <span
      className={styles.typed}
      dangerouslySetInnerHTML={{ __html: code.slice(0, index) }}
    />
  );

  const currentWord = (
    <span
      className={styles.current}
      dangerouslySetInnerHTML={{ __html: code.slice(index, index + 1) }}
    />
  );
  const unTypedWords = (
    <span
      className={styles.untyped}
      dangerouslySetInnerHTML={{ __html: code.slice(index + 1) }}
    />
  );

  return (
    <p className={styles.code}>
      {typedWords}
      {currentWord}
      {unTypedWords}
    </p>
  );
}
