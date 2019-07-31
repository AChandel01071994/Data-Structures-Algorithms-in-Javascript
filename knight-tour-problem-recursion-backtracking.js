{
    function knightTourProblem(){
        // 8 x 8 array to represent a chess board
        let chessBoard = Array.from({length : 8}, () => Array.from({length : 8}, () => 0)),
        rowSize = 8, colSize = 8;

        // start row, col & move
          let startRow = 0, startCol = 0, startMove = 1;
          
        // knight moves (only this sequence of moves gives the fastest result, rest will take endless time)
        let pathRow = [ 2, 1, -1, -2, -2, -1, 1, 2];
        let pathCol = [1, 2, 2, 1, -1, -2, -2, -1];

        // recursion helper function
        const helper = (row, col, move) => {
            if(move === (rowSize * colSize)){
                console.log({chessBoard});
                return true;
            } else {
                for(let i = 0; i < pathRow.length; i++){
                    let newRow = row + pathRow[i]; 
                    let newCol = col + pathCol[i];
                    if(isValidMove(newRow, newCol)){
                        move++;
                        chessBoard[newRow][newCol] = move;
                       if(helper(newRow, newCol, move)) return true;
                       move--;
                      chessBoard[newRow][newCol] = 0;
                    }
                }
            }

            return false;
        }

        const isValidMove = (row, col) => {
            return row >= 0 && col >= 0 && row < rowSize && col < colSize && chessBoard[row][col] === 0;
        }
        
        chessBoard[startRow][startCol] = startMove;
       return helper(startRow, startCol, startMove);
    }

    knightTourProblem()
}
