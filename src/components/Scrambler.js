import React, { useState } from "react";

function Scrambler() {
  const notations = ["F", "R", "U", "B", "L", "D", "F'", "R'", "U'", "B'", "L'", "D'", "F2", "R2", "U2", "B2", "L2", "D2"];
  const [scramble, setScramble] = useState(generateScramble);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function generateScramble() {
    let i = [];
    for (i; i.length <= 21; ) {
      i[i.length] = notations[getRandomInt(notations.length)] + " ";
      console.log(i);
    }
    setScramble(i)
  }
  return <div onClick={generateScramble}>{scramble}</div>;
}

export default Scrambler;
