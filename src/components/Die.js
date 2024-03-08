function Die(props) {
    let color = props.isHeld ? "#8eb1c7" : "rgb(234, 200, 114)"
  return (
    <div onClick={props.handleDice} >
      <h2 className="num" style={{backgroundColor: color}}>{props.value}</h2>
    </div>
  );
}

export default Die;
