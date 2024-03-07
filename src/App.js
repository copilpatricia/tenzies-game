import Die from "./components/Die";
import {useState} from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());
  // valueDice will be an array of Die elements with the value props set to the same number as the value of the index inside the array
  const valueDice = dice.map((num) => {
    return <Die value={num}/>;
  });
  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let value = Math.floor(Math.random() * 7) + 1;
      arr.push(value);
    }
    return arr;
  }
  allNewDice();

  return (
    <div className="container">
      <div className="board">
        <div className="container-die">
            {valueDice}
        <button id="btn-roll">Roll</button>
        </div>
      </div>
    </div>
  );
}

export default App;


