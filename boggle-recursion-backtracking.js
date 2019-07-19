// Boggle - using recursion & backtracking

{
    function boggle(board, dictionary, visited, rowSize, colSize){
        const result = [];
        const pathRow = [0,0,1,1,-1,1,-1,-1];
        const pathCol = [1,-1,-1,1,1,0,0,-1];

        // recursion helper function
        const recursionUtil = (row, col, word) => {
            if(dictionary.has(word)){
                result.push(word);
            }
               for(let i = 0; i < pathRow.length; i++){
                let newRow = row + pathRow[i];
                let newCol = col + pathCol[i];

                if(isValidMove(newRow, newCol)){
                    visited[newRow][newCol] = true;
                    recursionUtil(newRow, newCol, word + board[newRow][newCol]);
                    visited[newRow][newCol] = false;
                }
            }   
        }

        // helper function to check validity of next move
        const isValidMove = (row, col) => {
            return row >= 0 && col >= 0 && row < rowSize && col < colSize && visited[row][col] === false;
        }

        // check word sequences for each character
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                visited[i][j] = true;
                recursionUtil(i, j, board[i][j]);
                visited[i][j] = false;
            }
        }
        
        return result;
    }
    let board = [
        ['f', 'o', 'b'],
        ['o', 'a', 'e'],
        ['k', 's', 'c']
    ], rowSize = 3, colSize = 3;

     let visited = [
     [false, false, false],
     [false, false, false],
     [false, false, false],
    ];

    const dictionary = new Set(
      [
        'face',
        'book',
        'ace',
        'books',
        'aces'
      ]
    )
    boggle(board, dictionary, visited, rowSize, colSize);
}
