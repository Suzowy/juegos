import React, { useState } from 'react';
import '../styles/Tres.css';
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = (i) => {
    if (!isStarted) {
      setIsStarted(true);
    }
    const boardCopy = [...board];
    if (calculateWinner(boardCopy) || boardCopy[i]) {
      return;
    }
    boardCopy[i] = currentPlayer;
    setBoard(boardCopy);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => handleClick(i)}>
      {board[i]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={() => setBoard(Array(9).fill(null))}>Reset</button>
      </div>
    </div>
  );
}

const calculateWinner = (squares) => {
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
      return squares[a];
    }
  }
  return null;
};


export default TicTacToe