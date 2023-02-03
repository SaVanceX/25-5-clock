import { useState, useRef } from "react";
import Length from "./components/Length";

function App() {
  const [breakState, setBreakState] = useState(5);
  const [sessionMin, setSessionMin] = useState(25);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [togglePlay, setTogglePlay] = useState(false);
  let intervalId = useRef(null);

  const handleClick = (event) => {
    const target = event.target.className;
    if (breakState > 1 && "Break-dec" === target) {
      setBreakState(breakState - 1);
    } else if (breakState < 60 && "Break-inc" === target) {
      console.log("Increment Break Value");
      setBreakState(breakState + 1);
    }
    if (sessionMin > 1 && "Session-dec" === target) {
      setSessionMin(sessionMin - 1);
    } else if (sessionMin < 60 && "Session-inc" === target) {
      setSessionMin(sessionMin + 1);
    }
  };

  const handleSessionMin = () => {
    if (sessionMin > 1) {
      setSessionMin((sessionMin) => {
        console.log(sessionMin);
        return sessionMin - 1;
      });
    }
  };

  const startCountDown = () => {
    console.log("Start Count Down");
    intervalId.current = setInterval(() => {
      setSessionSeconds((sessionSeconds) => {
        if (sessionSeconds === 0) {
          handleSessionMin();
          setSessionSeconds(59);
        }
        return sessionSeconds - 1;
      });
    }, 1000);
  };
  const stopCountDown = () => {
    console.log("Pause count down");
    clearInterval(intervalId.current);
    intervalId.current = null;
  };
  // Function that handles Minutes and Seconds
  const handleTogglePlayPause = () => {
    setTogglePlay(!togglePlay);

    if (togglePlay === false) {
      if (sessionSeconds === 0) {
        // setSessionSeconds(59);
        startCountDown();
      }
      if (sessionSeconds < 59 && sessionSeconds > 0) {
        startCountDown();
      }
    }

    if (togglePlay) {
      stopCountDown();
    }
  };

  return (
    <>
      <div className="clock-container">
        <h1>25 + 5 Clock</h1>
        <div className="length-container">
          <Length type="Break" handleClick={handleClick} value={breakState} />
          <Length type="Session" handleClick={handleClick} value={sessionMin} />
        </div>
        <div className="session-timer">
          <p className="session-text">
            {String(sessionMin).padStart(2, "0")}:
            {String(sessionSeconds).padStart(2, "0")}
          </p>
        </div>
        <div className="timer-controls">Timer controls</div>
        {!togglePlay ? (
          <button onClick={handleTogglePlayPause}>Play</button>
        ) : (
          <button onClick={handleTogglePlayPause}>Pause</button>
        )}
        <button>Refresh</button>
        <p>Designed and Developed By SaVance Ford</p>
      </div>
    </>
  );
}

export default App;
