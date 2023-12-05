'use client';
import {useState, useEffect} from 'react';
import TypingCode from "@/features/components/TypingCode";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import WindowTop from "@/components/layouts/WindowTop";
import WindowCenter from "@/components/layouts/WindowCenter";

// ゲームを管理するコンポーネント
export default function TypingGame({codeList, showResult}) {
    const [codeIndex, setCodeIndex] = useState(0);
    console.log(codeList);
    const goNext = () => {
        setCodeIndex((prev) => prev + 1);
    }

    // TODO: カウントダウンタイマーを別コンポーネントに移植する
    return (
        <>
            <WindowTop>
                <CountdownCircleTimer
                    isPlaying={true}
                    duration={120}
                    size={100}
                    colors={["#ffffff"]}
                    colorsTime={[120]}
                    trailColor={"0, 0, 0, 0"}
                    strokeWidth={5}
                    onComplete={showResult}
                >
                    {({ remainingTime }) => (
                        <div className="timer">
                            <div className="text">{remainingTime}</div>
                        </div>
                    )}
                </CountdownCircleTimer>
            </WindowTop>
            <WindowCenter>
                <TypingCode code={codeList[codeIndex]} goNext={goNext} />
            </WindowCenter>
        </>
    );
}

