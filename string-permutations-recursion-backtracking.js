// permutations of string - n!
{
     function permutations(str, count, result, level, allResult){
         // if recursion level has reached same as string length
         if(level === str.length){
            allResult.push([...result]);
         } else {
             // loop through all characters
          for(let i = 0; i < str.length; i++){
              if(count[i] === 1) {
                  result[level] = str[i];
                  count[i] = 0;
                  level++;
                  // recursive call
                  permutations(str, count, result, level, allResult);
                  level--;
                  count[i] = 1;
              }
            
          }
         }
     }
    
    let str = 'abc', result = [], allResult = [], level = 0;
    // array containing 1s with same length as str
    let countArr = Array.from({length : str.length}, () => 1 );
    permutations(str, countArr, result, level, allResult);
    console.log(allResult);
}
