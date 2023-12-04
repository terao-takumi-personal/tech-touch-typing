import {useEffect} from "react";

// ゲーム開始時にスペースキーを押したらカウントダウン開始
export default function Ready({StartCountDown}) {
    useEffect(() => {
        const StartHandler = ({key}) => {
            if (key === ' ') StartCountDown();
        }

        window.addEventListener('keydown', StartHandler);

        return () => {
            window.removeEventListener('keydown', StartHandler);
        };
    }, []);

    return (
        <p>スペースキーを押して開始</p>
    );

}