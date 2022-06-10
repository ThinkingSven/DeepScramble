import React, {useEffect, useState} from "react";

function Timer() {
  const [thetimer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [scramble, setScramble] = useState("L' R2 F2 L' F2 D2 R B2 F2 D2 F D' L2 F2 D R F' L'")
  function handleReset() {
    setTimer(0)
    setTimerOn(false)
    setScramble("U' R F B' R' U2 R U D F R2 F2 U2 B L2 B R2 B' R2 B D2")
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
      <p>{scramble}</p>
      {showStart ?  <button onClick={() => setTimerOn(true)}>Start</button> : <></> }
      <button onClick={() => setTimerOn(false)}>Stop</button>
      {timerOn ? <></> : <button onClick={handleReset}>Next Solve</button>}

    </div>
  );
}

export default Timer;
