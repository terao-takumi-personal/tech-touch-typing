import styles from "./page.module.css";
import MainTheme from "@/components/elements/MainTheme";
import Image from "next/image";
import titleImage from "@/images/title.svg";
import LinkButton from "@/features/components/LinkButton";

export default function Home() {
  return (
    <MainTheme>
      <div>
        <h2 className={styles.subTitle}>Typing Practice for Engineers</h2>
        <Image
          src={titleImage}
          className={styles.title}
          alt="TECH TOUCH TYPING"
          priority={true}
        />
        <div className={styles.buttonLayout}>
          <LinkButton href="/game">play</LinkButton>
        </div>
      </div>
    </MainTheme>
  );
}
