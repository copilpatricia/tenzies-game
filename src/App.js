import Die from "./components/Die";
import {useState} from "react";
//generate a random id
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = useState(allNewDice());
  // valueDice will be an array of Die elements with the value props set to the same number as the value of the index inside the array
  const valueDice = dice.map((num) => {
    return <Die value={num.value} key={num.id}/>;
  });
  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let value = Math.floor(Math.random() * 7) + 1;
      arr.push({value: value, isHeld: false, id: nanoid()});
    }
    return arr;
  }
  allNewDice();

  function toggleRoll() {
    setDice(allNewDice())
  }


  return (
    <div className="container">
      <div className="board">
        <div className="container-die">
            {valueDice}
        <button id="btn-roll" onClick={toggleRoll}>Roll</button>
        </div>
      </div>
    </div>
  );
}

export default App;


