import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return (
    <button
      className={props.isWinnerSquare ? "square background-green" : "square"}
      style={
        props.isWinnerSquare ? { fontWeight: "bold" } : { fontWeight: "normal" }
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isWinnerSquare={
          this.props.winnerLine ? this.props.winnerLine.includes(i) : false
        }
      />
    );
  }

  render() {
    const rows = Array(3);
    const cols = Array(3);
    var count = 0;
    return (
      <div>
        {Array.from(rows).map((_, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {Array.from(cols).map((_, colIndex) => (
              <span key={colIndex}>{this.renderSquare(count++)}</span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          position: [null, null],
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      lastStepCellNumber: null,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let position = current.position.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    position = getColRow(i);
    this.setState((state) => ({
      history: history.concat([
        {
          squares: squares,
          position: position,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
      lastStepCellNumber: i,
      isAscSorting: true,
    }));
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  toggleSorting() {
    this.setState((state) => ({
      isAscendingOrder: !state.isAscendingOrder,
    }));
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winnerLine = calculateWinner(current.squares);
    let moves = history.map((step, move) => {
      const [row, col] = step.position;
      const desc = move
        ? `Go to move #${move} (row: ${row}, col: ${col})`
        : "Go to game start";
      const isLastMove = move !== 0 && move === history.length - 1;
      return (
        <li key={move}>
          <button
            style={
              isLastMove ? { fontWeight: "bold" } : { fontWeight: "normal" }
            }
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    if (this.state.isAscendingOrder) {
      moves = moves.reverse();
    }
    let status;
    if (winnerLine) {
      status = "Winner: " + current.squares[winnerLine[0]];
    } else if (this.state.stepNumber === current.squares.length) {
      status = "Result is a draw";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winnerLine={winnerLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.toggleSorting()}>
            {(this.state.isAscendingOrder ? "asc" : "desc") + " order"}
          </button>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

function getColRow(i) {
  switch (i) {
    case 0:
      return [1, 1];
    case 1:
      return [1, 2];
    case 2:
      return [1, 3];
    case 3:
      return [2, 1];
    case 4:
      return [2, 2];
    case 5:
      return [2, 3];
    case 6:
      return [3, 1];
    case 7:
      return [3, 2];
    case 8:
      return [3, 3];
    default:
      return [null, null];
  }
}
