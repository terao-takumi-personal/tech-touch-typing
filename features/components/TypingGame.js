"use client";
import { useState, useEffect } from "react";
import TypingCode from "@/features/components/TypingCode";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import WindowTop from "@/components/layouts/WindowTop";
import WindowCenter from "@/components/layouts/WindowCenter";
import CircleTimer from "@/components/elements/CircleTimer";

const DURATION = 10; // ゲーム時間

// ゲームを管理するコンポーネント
export default function TypingGame({
  codeList,
  incrementTypedWordCount,
  registerMissedWordList,
  showResult,
}) {
  const [codeIndex, setCodeIndex] = useState(0);

  const goNext = () => {
    setCodeIndex((prev) => prev + 1);
  };

  return (
    <>
      <WindowTop>
        <CircleTimer duration={DURATION} showResult={showResult} />
      </WindowTop>
      <WindowCenter>
        <TypingCode
          code={codeList[codeIndex]}
          incrementTypedWordCount={incrementTypedWordCount}
          registerMissedWordList={registerMissedWordList}
          goNext={goNext}
        />
      </WindowCenter>
    </>
  );
}
