'use client';

import React, { useState } from 'react';
import Button from './button';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return; // Ignore if already clicked or game over

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares: number[]) => {
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
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  const renderSquare = (index: number) => (
    <Button
      className="square h-24 w-24 border border-white bg-[#f9f9f9] hover:bg-[#e8e8e8]"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game font-[Arial, sans-serif] mt-12 text-center">
      {/* <style jsx>
        {`
          .game {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }

          .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 10px;
            justify-content: center;
            margin: 20px auto;
          }

          .row {
            display: flex;
          }

          .square {
            width: 100px;
            height: 100px;
            font-size: 24px;
            font-weight: bold;
            border: 2px solid #fff;
            background-color: #f9f9f9;
            cursor: pointer;
          }

          .square:hover {
            background-color: #e8e8e8;
          }

          .status {
            font-size: 20px;
            margin: 20px;
          }

          .reset-button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .reset-button:hover {
            background-color: #0056b3;
          }
        `}
      </style> */}
      <h1>Tic Tac Toe</h1>
      <div className="mx-auto my-5 flex flex-col">
        {[0, 1, 2].map((row) => (
          <div className="flex flex-row justify-center" key={row}>
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <Button onClick={resetGame} kind="error">
        Reset Game
      </Button>
    </div>
  );
};

export default TicTacToe;
