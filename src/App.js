import { useState } from "react";
import Length from "./components/Length";

function App() {
  const [breakState, setBreakState] = useState(5);
  const [sessionState, setSessionState] = useState(25);
  const handleClick = (event) => {
    const target = event.target.className;
    console.log(target);
    // handle rather button is decrement or increment
    if (breakState > 1 && breakState < 60) {
      if ("Break-dec" === target) {
        setBreakState(breakState - 1);
      }
      if ("Break-inc" === target) {
        setBreakState(breakState + 1);
      }
    }

    if (sessionState > 1 && sessionState < 60) {
      if ("Session-dec" === target) {
        setSessionState(sessionState - 1);
      }
      console.log("hello");
      if ("Session-inc" === target) {
        setSessionState(sessionState + 1);
      }
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
