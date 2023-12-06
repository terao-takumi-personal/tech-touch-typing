import styles from "./page.module.css";
import MainTheme from "@/components/elements/MainTheme";
import ModalWindow from "@/components/elements/ModalWindow";
import Link from "next/link";
import GameSequence from "@/features/components/GameSequence";

export default function GamePage() {
  return (
    <MainTheme>
      <ModalWindow>
        <div className={styles.header}>
          <Link href="/">
            <p className={styles.linkText}>&gt; back</p>
          </Link>
        </div>
        <GameSequence />
      </ModalWindow>
    </MainTheme>
  );
}
