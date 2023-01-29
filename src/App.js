import { useEffect, useState } from "react";
import Length from "./components/Length";

function App() {
  const [breakState, setBreakState] = useState(5);
  const [sessionState, setSessionState] = useState(25);

  const handleClick = (event) => {
    const target = event.target.className;
    if (breakState > 1 && "Break-dec" === target) {
      setBreakState(breakState - 1);
    } else if (breakState < 60 && "Break-inc" === target) {
      console.log("Increment Break Value");
      setBreakState(breakState + 1);
    }
    if (sessionState > 1 && "Session-dec" === target) {
      setSessionState(sessionState - 1);
    } else if (sessionState < 60 && "Session-inc" === target) {
      setSessionState(sessionState + 1);
    }
  };

  return (
    <>
      <div className="clock-container">
        <h1>25 + 5 Clock</h1>
        <div className="length-container">
          <Length type="Break" handleClick={handleClick} value={breakState} />
          <Length
            type="Session"
            handleClick={handleClick}
            value={sessionState}
          />
        </div>
        {/* padStart(2, '0') */}
        <div className="session-timer">
          <p>{String(sessionState).padStart(2, "0")}:00</p>
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
