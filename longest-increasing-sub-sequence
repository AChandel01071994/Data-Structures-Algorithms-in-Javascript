{
    // Longest Increasing Subsequence length problem (Dynamic Programming)
    // time complexity - O (n^2)
    function longestIncreasingSubsequence(arr){
        let max = 1;
        // initially answer to each sub problem is 1
        let tabulationArr = Array.from({length : arr.length}, () => 1);
        let i = 0, j = 1;
        // from 2nd element to last
        while(j < arr.length){
            i = 0;
            while(i < j){
                // if jth element is greater than ith
                if (arr[j] > arr[i]){
                    // take value at ith index, increase with 1 and set it at jth index
                    tabulationArr[j] = tabulationArr[i] + 1;
                    // calculate max element in tabulation matrix
                    max = Math.max(max, tabulationArr[j])
                }
                i++;
            }
            j++;
        }
        // return max element in tabulation matrix
        return max;
    }

    // using Binary Search - time complexity - O (n * log n)
    function longestIncreasingSubsequenceOptimized(arr){
        // subsequence array contains last item of each subsequence 
        // hence very last item of subsequence array will be the last item of longestIncreasingSubsequence
        let subSequenceArr = [], res = [];
        let prev = [];

        for(let i = 0; i < arr.length; i++){
            // update subsequence using binary search
           let low = 0, high = subSequenceArr.length - 1;
           // if new arr item is greater than last element of subsequence array just append
           if(arr[subSequenceArr[subSequenceArr.length - 1]] < arr[i]) {
                low = subSequenceArr.length;
           } else {
            // else run binary search to find the spot in log n time
                   while(low <= high){
                   let mid = Math.floor(low + high / 2);
                   if(arr[i] > arr[subSequenceArr[mid]]) low = mid + 1;
                   else if(arr[i] < arr[subSequenceArr[mid]]) high = mid - 1;
                   else break;
               }
           }
           subSequenceArr[low] = i;
           // update prev to find all the items later
           prev[i] = subSequenceArr[low - 1];
       }
        
       let lastItemIdx = subSequenceArr[subSequenceArr.length - 1];

       // assemble items of longest sub subSequence
       for(let i = subSequenceArr.length - 1; i >= 0; i--){
           res[i] = arr[lastItemIdx];
           lastItemIdx = prev[lastItemIdx]
       }

       return {
           items : res,
           length : res.length
       };
    }

// let arr = [3,1,5,2,6,4,9];
//     let arr = [-1, 3, 4, 5, 2, 2, 2, 2];
// longestIncreasingSubsequence(arr)

// let arr = [3,1,5,2,6,4,9];
    let arr = [-1, 3, 4, 5, 2, 2, 2, 2];
longestIncreasingSubsequenceOptimized(arr)

    
}
