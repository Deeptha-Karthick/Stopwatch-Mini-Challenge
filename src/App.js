import "./styles.css";
import { useState, useMemo, useRef } from "react";

export default function App() {
  const [ms, setMs] = useState(0);
  const timerId = useRef(null);
  const lastTime = useRef(0);
  const time = useMemo(() => {
    let milliSeconds = 0;
    let seconds = 0;
    let minutes = 0;

    if (ms !== 0) {
      minutes = Math.floor(ms / 60000);
      seconds = Math.floor((ms % 60000) / 1000);
      milliSeconds = Math.floor(ms % 1000);
    }

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliSeconds).padStart(2, "0")}`;
  }, [ms]);

  const updateTime = () => {
    let now = performance.now();
    if (lastTime.current === 0) lastTime.current = now;
    let timeLapsed = now - lastTime.current;
    setMs((prev) => prev + timeLapsed);
    lastTime.current = now;
    timerId.current = requestAnimationFrame(updateTime);
  };

  const onStartClick = () => {
    timerId.current = requestAnimationFrame(updateTime);
  };

  const onEndClick = () => {
    cancelAnimationFrame(timerId.current);
    timerId.current = null;
  };

  const onResetClick = () => {
    setMs(0);
    lastTime.current = 0;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="stop-watch">
        <h2>Stop watch</h2>
        <div>{time}</div>
        <div className="buttons">
          <button onClick={onStartClick}>START</button>
          <button onClick={onEndClick}>STOP</button>
          <button onClick={onResetClick}>RESET</button>
        </div>
      </div>
    </div>
  );
}
