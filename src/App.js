import Die from "./components/Die";

function App() {
  function allNewDice() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let value = Math.floor(Math.random() * 7) + 1;
      arr.push(value);
    }
    return arr;
  }
  allNewDice();
  console.log(allNewDice());

  return (
    <div className="container">
      <div className="board">
        <div className="container-die">
          <div className="cont-one">
            <Die value="1" />
            <Die value="2" />
            <Die value="3" />
            <Die value="4" />
            <Die value="5" />
          </div>
          <div className="cont-two">
            <Die value="6" />
            <Die value="7" />
            <Die value="8" />
            <Die value="9" />
            <Die value="10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
