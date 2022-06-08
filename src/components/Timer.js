import React, {useEffect, useState} from "react";

function Timer() {
  const [thetimer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }

    return(() => {clearInterval(interval)})

  }, [timerOn])
  return (
    <div>
      <p>Time: {timerOn.toString()}</p>
      <p>Time: {thetimer}</p>
      <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTimer(0)}>Reset</button>
    </div>
  );
}

export default Timer;
