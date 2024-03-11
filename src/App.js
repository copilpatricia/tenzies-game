import { useEffect, useState } from "react";
//generate a random id
import { nanoid } from "nanoid";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());
 
  // add a new state called tenzies which represents if the user has won the game or not
  const [tenzies, setTenzies] = useState(false)
  
  // add an effect that checks if the dice have the same value / are held  => change the tenzies state
  //.every() method - will look for a specific contion - if every item in the array returns true from the condition => .every() method will return true
  // to check if they have the same value - take a reference(the first item in the array) and check if the rest of dice have the same value as the reference
  useEffect(function() {
   const allHeld = dice.every(die => die.isHeld === true)
   const firstValue = dice[0].value
   const sameValue = dice.every(die => die.value === firstValue)

   if(allHeld && sameValue) {
    setTenzies(tenzies => !tenzies)
    console.log("You won!")
   }
  }, [dice])

  function getRandomNumbers() {
    return {
      value: Math.floor(Math.random() * 7) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  // generate random number between 1-7
  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(getRandomNumbers());
    }
    return arr;
  }
 
  // generate new numbers everytime we push the roll button
  // improve the function - stop the function to roll any die that is being held - and generate new numbers only for those who are not held
  function toggleRoll() {
    setDice((prevDice) => 
    prevDice.map((die) => {
      return die.isHeld ? die : getRandomNumbers()
    }));
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
            {tenzies ? "New game" : "Roll"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
