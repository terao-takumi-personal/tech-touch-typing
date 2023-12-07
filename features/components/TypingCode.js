"use client";
import { useState, useEffect } from "react";
import Code from "@/components/elements/Code";

export default function TypingCode({
  code,
  incrementTypedWordCount,
  registerMissedWordList,
  goNext,
}) {
  const [typedWordCount, setTypedWordCount] = useState(0);

  useEffect(() => {
    const keyDownHandler = ({ key }) => {
      if (key === "Shift") return;

      incrementTypedWordCount();

      const currentWord = code[typedWordCount];
      // 正解だった場合にワードカウントを進める
      if (currentWord === key) {
        if (typedWordCount + 1 === code.length) {
          // すべての文字を打ち切ったら次のコードに進む
          goNext();
          setTypedWordCount(0); // stateの初期化
        } else {
          // 次の文字に進む
          setTypedWordCount((prev) => prev + 1);
        }
      } else {
        registerMissedWordList(currentWord);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [typedWordCount, code]);

  return <Code code={code} index={typedWordCount} />;
}
