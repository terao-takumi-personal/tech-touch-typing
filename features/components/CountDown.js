import {useState,useEffect} from "react";
import GameText from "@/components/elements/GameText";
import WindowCenter from "@/components/layouts/WindowCenter";

const COUNT = 3;

// 3秒間カウントダウンを行ったあとにゲームを開始する
export default function CountDown({startGame}) {
    const [countdown, setCountdown] = useState(COUNT);
    useEffect(() => {
        if (countdown >= 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            if (countdown === 0) {
                startGame();
                setCountdown(COUNT);
            }

            return () => clearInterval(timer);
        }
    }, [countdown]);

    return (
        <WindowCenter>
            <GameText text={countdown} />
        </WindowCenter>
    );
}