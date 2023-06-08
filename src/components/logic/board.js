import { WINNER_COMBOS } from '../../constants';

export const checkWinnerFrom = (boardToCheck) => {
	//Revisamos todas las combinaciones ganadoras para ver si x o u gano
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a];
		}
	}
	//No hay ganador
	return null;
};

export const checkEndGame = (newBoard) => {
	return newBoard.every((square) => square !== null);
};
