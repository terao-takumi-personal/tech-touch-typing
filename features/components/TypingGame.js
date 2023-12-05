'use client';
import {useState, useEffect} from 'react';
import TypingCode from "@/features/components/TypingCode";



let codeListThisTime;

// ゲームを管理するコンポーネント
export default function TypingGame({codeList, showResult}) {
    const [codeIndex, setCodeIndex] = useState(0);
    console.log(codeList);
    const goNext = () => {
        setCodeIndex((prev) => prev + 1);
    }

    return (
        <>
            <TypingCode code={codeList[codeIndex]} goNext={goNext} />
        </>
    );
}

