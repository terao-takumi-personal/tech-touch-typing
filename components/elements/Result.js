import styles from "@/styles/components/elements/Result.module.css";
import WhiteButton from "@/components/elements/WhiteButton";

export default function Result({
  rank,
  wpm,
  accuracy,
  typed,
  missed,
  problematicKeys,
  retry,
}) {
  return (
    <>
      <div>
        <div className={styles.rankTitle}>Rank</div>
        <div className={styles.rankResult}>{rank}</div>
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.scoreWrapper}>
          <div className={styles.scoreTitle}>WPM</div>
          <div className={styles.scoreResult}>{wpm}</div>
        </div>
        <div className={styles.scoreWrapper}>
          <div className={styles.scoreTitle}>Accuracy</div>
          <div className={styles.scoreResult}>{accuracy}%</div>
        </div>
        <div className={styles.scoreWrapper}>
          <div className={styles.scoreTitle}>Typed</div>
          <div className={styles.scoreResult}>{typed}</div>
        </div>
        <div className={styles.scoreWrapper}>
          <div className={styles.scoreTitle}>Missed</div>
          <div className={styles.scoreResult}>{missed}</div>
        </div>
        <div className={styles.scoreWrapper}>
          <div className={styles.scoreTitle}>Problematic Keys</div>
          <div className={styles.scoreResult}>{problematicKeys.join(" ")}</div>
        </div>
        <div className={styles.buttonWrapper}>
          <WhiteButton onClick={retry}>retry</WhiteButton>
        </div>
      </div>
    </>
  );
}
