import Image from 'next/image'
import titleImage from "@/images/title.svg";
import styles from './page.module.css'
import Button from "@/components/elements/Button";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <h2 className={styles.subTitle}>エンジニアのためのタイピング練習</h2>
                <Image src={titleImage} className={styles.title} alt="TECH TOUCH TYPING"/>
                <div className={styles.buttonLayout}>
                    <Button>play</Button>
                </div>
            </div>
        </main>
    )
}
