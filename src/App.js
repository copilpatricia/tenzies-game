import { useState } from "react";
//generate a random id
import { nanoid } from "nanoid";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  // generate random number between 1-7
  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let value = Math.floor(Math.random() * 7) + 1;
      arr.push({ value: value, isHeld: true, id: nanoid() });
    }
    return arr;
  }
 
  // generate new numbers everytime we push the roll button
  function toggleRoll() {
    setDice(allNewDice());
  }

  // update the state of the array using the setDice function
  // we need the previous value of the array to determine the new array
  //return a new array - only the isHeld property will change
  //if the id is the same with the one passed into the function - update the array, otherwise return the same die
  function handleDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        } else {
          return die;
        }
      })
    );
  }

  // valueDice will be an array of Die elements with the value props set to the same number as the value of the index inside the array
  const valueDice = dice.map((num) => {
    return (
      <Die
        key={num.id}
        value={num.value}
        isHeld={num.isHeld}
        handleDice={() => handleDice(num.id)}
      />
    );
  });

  return (
    <div className="container">
      <div className="board">
        <div className="container-die">
          {valueDice}
          <button id="btn-roll" onClick={toggleRoll}>
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
