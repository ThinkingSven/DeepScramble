import React, {useEffect, useState} from "react";
import Scrambler from "./Scrambler";
function Timer() {
  const [thetimer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [scramble, setScramble] = useState()
  function handleReset() {
    setTimer(0)
    setTimerOn(false)
    setScramble("new Scramble")
    setShowStart(true);
  }

  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 10)
      }, 10)
      setShowStart(false);
    }else{
      clearInterval(interval)
    }

    return(() => {clearInterval(interval)})

  }, [timerOn])
  return (
    <div>
      <h1>{Math.round(thetimer/1000)}s</h1>
      {showStart ?  <button onClick={() => setTimerOn(true)}>Start</button> : <></> }
      <button onClick={() => setTimerOn(false)}>Stop</button>
      {timerOn ? <></> : <button onClick={handleReset}>Next Solve</button>}

      <Scrambler/>
    </div>
  );
}

export default Timer;
