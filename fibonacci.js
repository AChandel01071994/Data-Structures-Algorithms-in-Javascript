{
    // problem with below properties can be optimized using Dyanmic programming -
    // 1- Overlapping Subproblems
    // 2- Optimal Substructure

    let memoize = new Map();
    function fibonacciMemoization(k){
        if (k <= 2) return 1;
        if(!memoize.has(k)) {
             const res =  fibonacciMemoization(k - 1) + fibonacciMemoization(k - 2);
             memoize.set(k,res);
        }
        return memoize.get(k)
    }

    function fibonacciIterative(k){
        if(k <= 2) return 1;
        let first = 1, second = 1, res = 0;

        for(let i = 3; i <= k; i++){
            res = first + second;
            first = second;
            second  = res;

        }
        return res;
    }

    function fibonacciTabulation(k){
        if(k <= 2) return 1;

        let arr = [null, 1, 1];

        for(let i = 3; i <= k; i++){
            arr[i] = arr[i - 1] + arr[i - 2];
        }

        return arr;
    }
     
    fibonacciTabulation(5)
}
