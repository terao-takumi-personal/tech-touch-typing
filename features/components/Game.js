'use client';
import {useState, useEffect} from 'react';
import Ready from "@/features/components/Ready";
import CountDown from "@/features/components/CountDown";

export default function Game() {
    const [gameState, setGameState] = useState('ready');

    const startCountDown = () => {
        setGameState('countdown');
    }

    const startGame = () => {
        setGameState('playing');
    }

    return (
        <>
            {gameState === 'ready' && <Ready StartCountDown={startCountDown} />}
            {gameState === 'countdown' && <CountDown startGame={startGame} />}
            {gameState === 'playing' && <p style={{color: 'white', fontSize: '24px'}}>ゲーム中</p>}
        </>
    );
}