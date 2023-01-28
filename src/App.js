import { useState } from "react";
import Length from "./components/Length";

function App() {
  const [breakState, setBreakState] = useState(5);

  const handleClick = (event) => {
    const target = event.target.className;
    // handle rather button is decrement or increment
    if (breakState > 1 && breakState < 60) {
      if ("Break-dec" === target) {
        setBreakState(breakState - 1);
      }
    }

    if ("Break-inc" === target) {
      setBreakState(breakState + 1);
    }
  };

  return (
    <>
      <div className="clock-container">
        <h1>25 + 5 Clock</h1>
        <div className="length-container">
          <Length type="Break" handleClick={handleClick} value={breakState} />
          <Length type="Session" handleClick={handleClick} />
        </div>
        <div className="timer">
          <p>00:00</p>
        </div>
        <div className="timer-controls">Timer controls</div>
        <button>Play - Pause</button>
        <button>Refresh</button>
        <p>Designed and Developed By SaVance Ford</p>
      </div>
    </>
  );
}

export default App;
