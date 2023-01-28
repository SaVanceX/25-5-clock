function App() {
  return (
    <>
      <div className="clock-container">
        <h1>25 + 5 Clock</h1>
        <div className="length-container">
          <button>Decrement</button>
          <button>Inecrement</button>
          <button>Decrement</button>

          <button>Inecrement</button>
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
