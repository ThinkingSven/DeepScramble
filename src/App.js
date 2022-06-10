import { useState, useEffect } from "react";
import "./App.css";
import Scrambler from "./components/Scrambler";
import Timer from "./components/Timer";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", handleSpace);
  }, []);

  const [toggle, setToggle] = useState(false);
  function handleSpace(e) {
    if (e.keyCode == 32) {
      setToggle(!toggle)
      console.log(toggle.toString())
    }
  }
  return (
    <div className="App">
      <Timer />
      <h2>Shortcuts:</h2>
      <p>Press <a>space</a> to start/stop the timer.</p>
      <p>Press <a>enter</a> to get to the next solve.</p>
    </div>
  );
}

export default App;
