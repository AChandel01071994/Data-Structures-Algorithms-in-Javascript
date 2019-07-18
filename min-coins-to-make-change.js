// min coin to make change
// Time complexity - O ( change * coins)
{
    function minCoinRecursion(coins, change){
        let count = 0, min = Infinity;

        const helper = (remainingChange, count) => {
            if(remainingChange < 0) return;

            if(remainingChange === 0) {
                min = Math.min(min, count);
                return;
            };

            for(let c of coins){
                count++;
                helper(remainingChange - c, count);
                count--;
            }
        }
        helper(change, count)
        return min;        
    }

// space complexity - O (change * coins)
    function minCoinTabulation(coins, change){
        let tabulationMatrix = [];
        for(let i = 0; i < coins.length; i++){
            
            tabulationMatrix[i] = [];
            for(let j = 0; j <= change; j++){
                if(j === 0) {
                    tabulationMatrix[i][j] = 0;
                } else {
                    let val;
                    let currentCoinExcluded = tabulationMatrix[i - 1] === undefined ? Infinity : tabulationMatrix[i - 1][j];
                    let subProblemValue = (j - coins[i]) >= 0 ? tabulationMatrix[i][j - coins[i]] : currentCoinExcluded;
                    val = Math.min(currentCoinExcluded, subProblemValue + 1);
                    tabulationMatrix[i][j] = val;
                }
            }
        }
        return tabulationMatrix;
    }

        // space complexity - O (change)
      function minCoinTabulationOptimizedSpace(coins, change){
          // populate Infinity in as default value for all subproblems
         let tabulationMatrix = Array.from({length : change + 1}, () => Infinity);
//         coins.unshift(null);
        for(let i = 0; i <= change; i++){
             for(let j = 0; j < coins.length; j++){
                 if(i === 0) {
                     tabulationMatrix[i] = 0;
                     continue;
                 }

                 let val = tabulationMatrix[i];
                 let subProblemValue = (i - coins[j]) >= 0 ? tabulationMatrix[i - coins[j]] : val;
                 subProblemValue = subProblemValue + 1;

                 tabulationMatrix[i] = Math.min(val, subProblemValue);
             }
        }

        return tabulationMatrix;

    }

let coins = [1,2,5], change = 11;

// minCoinRecursion(coins, change)

// minCoinTabulation(coins, change)

minCoinTabulationOptimizedSpace(coins, change)
      
 
}
