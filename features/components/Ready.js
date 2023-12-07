import { useEffect } from "react";
import GameText from "@/components/elements/GameText";
import WindowCenter from "@/components/layouts/WindowCenter";

export default function Ready({ StartCountDown }) {
  useEffect(() => {
    const StartHandler = ({ key }) => {
      if (key === " ") StartCountDown();
    };

    window.addEventListener("keydown", StartHandler);

    return () => {
      window.removeEventListener("keydown", StartHandler);
    };
  }, []);

  return (
    <WindowCenter>
      <GameText text={"Enter Space Key to start"} />
    </WindowCenter>
  );
}
