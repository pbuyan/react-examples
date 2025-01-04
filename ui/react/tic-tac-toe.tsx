"use client";

import type React from "react";
import { useState } from "react";
import Button from "../button";

// Define styles as constants
const rowStyle: React.CSSProperties = {
	display: "flex",
};

const squareStyle: React.CSSProperties = {
	width: "60px",
	height: "60px",
	backgroundColor: "#ddd",
	margin: "4px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "20px",
	color: "black",
	cursor: "pointer",
};

const boardStyle: React.CSSProperties = {
	backgroundColor: "#eee",
	width: "208px",
	alignItems: "center",
	justifyContent: "center",
	display: "flex",
	flexDirection: "column",
	border: "3px #eee solid",
};

const containerStyle: React.CSSProperties = {
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
};

const instructionsStyle: React.CSSProperties = {
	marginTop: "5px",
	marginBottom: "5px",
	fontWeight: "bold",
	fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
	marginTop: "15px",
	marginBottom: "16px",
	width: "80px",
	height: "40px",
	backgroundColor: "#8acaca",
	color: "white",
	fontSize: "16px",
};

// Define props type for Square component
interface SquareProps {
	value: string | null;
	onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="square"
			style={squareStyle as React.CSSProperties}
			onClick={onClick}
		>
			{value}
		</div>
	);
};

const TicTacToe: React.FC = () => {
	const [squares, setSquares] = useState<(string | null)[]>(
		Array(9).fill(null),
	);
	const [isXNext, setIsXNext] = useState<boolean>(true);
	const [winner, setWinner] = useState<string | null>(null);

	const calculateWinner = (squares: (string | null)[]): string | null => {
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
		for (const line of lines) {
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

	const handleClick = (index: number): void => {
		if (squares[index] || winner) return;

		const newSquares = squares.slice();
		newSquares[index] = isXNext ? "X" : "O";
		setSquares(newSquares);

		const gameWinner = calculateWinner(newSquares);
		if (gameWinner) {
			setWinner(gameWinner);
		} else {
			setIsXNext(!isXNext);
		}
	};

	const resetGame = (): void => {
		setSquares(Array(9).fill(null));
		setIsXNext(true);
		setWinner(null);
	};

	return (
		<div style={containerStyle} className="gameBoard">
			<div id="statusArea" className="status" style={instructionsStyle}>
				Next player: <span>{isXNext ? "X" : "O"}</span>
			</div>
			<div id="winnerArea" className="winner" style={instructionsStyle}>
				Winner: <span>{winner || "None"}</span>
			</div>
			<Button style={buttonStyle} onClick={resetGame}>
				Reset
			</Button>
			<div style={boardStyle}>
				{[0, 1, 2].map((row) => (
					<div key={row} className="board-row" style={rowStyle}>
						{[0, 1, 2].map((col) => {
							const index = row * 3 + col;
							return (
								<Square
									key={index}
									value={squares[index]}
									onClick={() => handleClick(index)}
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default TicTacToe;
