{
    function minEditDistanceRecursion(str1, str2, leng1 = str1.length, leng2 = str2.length) {
        // if str1 length is exhausted , return length of str2
         if(leng1 === 0) return leng2;
        // if str2 length is exhausted , return length of str1
         if(leng2 === 0) return leng1;

        // if current characters are same, do not add 1
         if(str1[leng1 - 1] === str2[leng2 - 1])
            return minEditDistanceRecursion(str1, str2, leng1 - 1, leng2 - 1)

         return 1 + Math.min(
            // replace
            minEditDistanceRecursion(str1, str2, leng1 - 1, leng2 - 1),
            // insert
            minEditDistanceRecursion(str1, str2, leng1 - 1, leng2),
            // delete
            minEditDistanceRecursion(str1, str2, leng1, leng2 - 1)
         )
    }
    
    // DP solution
    function minEditDistanceMemoization(str1, str2){
       let matrix = [];

       for(let i = 0; i < str1.length + 1; i++){
           matrix[i] = [];
           for(let j = 0; j < str2.length + 1; j++){
               // init with 0
                if(i === 0 && j === 0) matrix[i][j] = 0;
                // first row
                else if(i === 0) matrix[i][j] = matrix[i][j - 1] + 1;
                // first column
                else if(j === 0) matrix[i][j] = matrix[i - 1][j] + 1;
                // if characters match
                else if(str1[i - 1] === str2[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
                // if characters do not match
                else  {
                    matrix[i][j] = 1+ Math.min(
                        matrix[i - 1][j],
                        matrix[i][j - 1],
                        matrix[i - 1][j - 1]
                    )
                }
           }
       }
       // result
       return matrix[str1.length][str2.length];
    }


    let str1 = 'abcol';
    let str2 = 'abcef';

//     minEditDistanceRecursion(str1, str2)

minEditDistanceMemoization(str1, str2)
}
