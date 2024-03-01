import Die from "../components/Die"

function GameBoard() {
    return (
        <div className="container">
            <div className="board">
                <Die />   
            </div>
        </div>
    )
}

export default GameBoard