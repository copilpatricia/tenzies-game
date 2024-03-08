function Die(props) {
    //ternary operator - render based on the isHeld property - true/false
    let color = props.isHeld ? "#8eb1c7" : "rgb(234, 200, 114)"

  return (
    // pass a function to the child component using props
    <div onClick={props.handleDice} >
      <h2 className="num" style={{backgroundColor: color}}>{props.value}</h2>
    </div>
  );
}

export default Die;
