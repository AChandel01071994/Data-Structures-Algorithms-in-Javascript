// Longest Common Subsequence (LCS) - Recursion and Dynamic Programming

{
    // brute force approach - O (n ^ 2 * m)
    function longestCommonSubsequenceBruteForce(str1, str2){
        let result = '';
        for(let i = 0; i < str2.length; i++){
            let lastIndex = -1, str = '';
            for(let j = i; j < str2.length; j++){
                for(let k = 0; k < str1.length; k++){
                    if(str1[k] === str2[j]) {
                        if(k > lastIndex){
                            str += str1[k];
                            lastIndex = k;
                            break;
                        }
                    }
                }
            }
            if(str.length >= result.length) result = str;
        }

        return result;
    }
    // recursion
    function longestCommonSubsequenceRec(str1, str2){
        let index1 = 0, index2 = 0;
        const helper = (i, j) => {
            // if pointers go beyond length return 0
            if(i >= str1.length || j >= str2.length) return 0;
            // if values match, return 1 + increase both pointers
            else if(str1[i] === str2[j]) return 1 + helper(i + 1, j + 1);
            // if values do not match, return max of (i+1,j) & (i, j+1)
            else return Math.max(helper(i + 1, j), helper(i, j + 1));
        }
        return helper(index1, index2);
    }
    // Memoization - top down
     function longestCommonSubsequenceMemoization(str1, str2){
         // memo - to cache the computations
        let index1 = 0, index2 = 0, memo = Array.from({length : str1.length + 1}, () => Array.from({length : str2.length + 1 }, () => null));
        const helper = (i, j) => {
            // base case - str1 or str2 exhausted
             if(i >= str1.length || j >= str2.length) return 0;
            // character matches
              else if(str1[i] === str2[j]) {
                 if (memo[i + 1][j + 1] === null) memo[i + 1][j + 1] = helper(1 + 1, j + 1);
                  return 1 + memo[i + 1][j + 1];
             } else {
             // character does not match
                 if(memo[i + 1][j] === null) memo[i + 1][j] = helper(i + 1 , j);
                 if(memo[i][j + 1] === null) memo[i][j + 1] = helper(i , j + 1);
                 return Math.max(memo[i + 1][j], memo[i][j + 1]);
             }
        }
       return helper(index1, index2);
    }

    // Dynamic programming - bottom up
    function longestCommonSubsequenceDP(str1, str2){
        let arr = [];
        for(let i = 0; i <= str1.length; i++){
            arr[i] = [];
            for(let j = 0; j <= str2.length; j++){
                // base case (set 0) (prev is used for backtracking)
                if(i === 0 || j === 0) arr[i][j] = {val : 0, prev : null, isMatch : false}
                else {
                    // match
                    if(str1[i - 1] === str2[j - 1]) {
                        arr[i][j] = {
                                val : 1 + arr[i - 1][j - 1].val, 
                                prev : arr[i-1][j-1],
                                isMatch  : true,
                                character : str1[i - 1]
                            }
                    }
                    else {
                        // mismatch
                        // select max value
                        if(arr[i - 1] [j].val >= arr[i][j - 1].val){
                            arr[i][j] = {
                            val : arr[i - 1] [j].val,
                            prev : arr[i - 1][j],
                            isMatch : false
                         }
                        } else {
                            arr[i][j] = {
                            val : arr[i][j - 1].val,
                            prev : arr[i][j - 1],
                            isMatch : false
                         }
                        }    
                    }
                }
            }
        }
        // backtrack the common subsequence
        let str = '';
        let current = arr[str1.length][str2.length];
        while(current !== null){
            if(current.isMatch) str = current.character + str;
            current = current.prev;
        }

        return str;
    }

//     let str1 = 'AGGTAB';
//     let str2 = 'GXTXAYB';
// 4

    longestCommonSubsequenceDP(str1, str2)
}
