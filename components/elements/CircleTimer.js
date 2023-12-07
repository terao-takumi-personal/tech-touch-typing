import styles from "@/styles/components/elements/CircleTimer.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function CircleTimer({ duration, showResult }) {
  return (
    <CountdownCircleTimer
      isPlaying={true}
      duration={duration}
      size={100}
      colors={["#ffffff"]}
      colorsTime={[120]}
      trailColor={"0, 0, 0, 0"}
      strokeWidth={5}
      onComplete={showResult}
    >
      {({ remainingTime }) => (
        <div className={styles.remainingTimeText}>{remainingTime}</div>
      )}
    </CountdownCircleTimer>
  );
}
