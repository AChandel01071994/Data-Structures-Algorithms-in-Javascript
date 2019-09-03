// N Queen Problem
{
    function nQueenProb(n){
            // n x n board
        let board = Array.from({length : n}, () => Array.from({length : n}, () => false));
        // check current cell validity
        const isValidStep = (row, col) => {
             let valid = true;
            // vertical
            for(let i = 0; i < n; i++){
                if(board[i][col]) valid = false;
            }
            // left diagonal
            for(let i = row, j = col; i >= 0 && j >= 0;i--,j--){
                    if(board[i][j]) valid = false;
            }
            // right diagonal
            for(let i = row, j = col;i >=0 && j < n; i--,j++){
                    if(board[i][j]) valid = false;
            }
            return valid;
        }
 
        const helper= (row) => {
                // base case
                if(row === n - 1){
                     return board;
                } else {
                     row = row + 1;
                     // traverse columns
                     for(let i = 0; i < n; i++) {
                        if(isValidStep(row, i)){
                             board[row][i] = true;
                             if(helper(row, i)){
                                  return board;
                             }
                             board[row][i] = false;
                        }
                     }
                     return false;
                }
        }

       return helper(-1)
       
}
// driver
nQueenProb(8);

}
