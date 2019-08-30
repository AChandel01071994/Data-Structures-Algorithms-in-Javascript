// longest common substring - Dynamic programming
{
    // better to use KMP (broken)
    function LCSubstringBruteForce(str1, str2){
        let res = '', updatedIdx = -1;
        while(true){
            let changed = false;
            let idx = -1, str = '';
          for(let i = 0; i < str1.length; i++){
              for(let j = updatedIdx + 1; j < str2.length;j++){
                 if(str1[i] === str2[j]){
                     if(idx === -1 || j === idx + 1){
                         str += str2[j];
                         idx = j;
                         changed = true;
                         updatedIdx = j;
                         break;
                     }
                 } else {
                    if(str.length > res.length) res = str;
                    str = '',idx = -1;
                 }
              }
          }
          if(str.length > res.length) res = str;
          idx = -1, str = '';
          if(!changed) break;
        }
        return res;
   }

   function LCSubstringRec(str1, str2){
    // write recursive first
        let max = -Infinity;
        const helper = (i, j, count) => {
            if(i === 0 || j === 0) return count;
            if(str1[i - 1] === str2[j - 1]){
               count = helper(i - 1, j - 1, count + 1);
            } 

            count = Math.max(count, Math.max(helper(i -1, j, 0),helper(i, j - 1,0)));
            return count;
        }

        return helper(str1.length, str2.length, 0);
        
   }

    function LCSubstringDP(str1, str2){
        let arr = [], max = -Infinity;
        for(let i = 0; i <= str1.length; i++){
            arr[i] = [];
            for(let j = 0; j <= str2.length; j++){
                if(i === 0 || j === 0) arr[i][j] = 0
                else {
                    if(str1[i - 1] === str2[j - 1]){
                        arr[i][j] = 1 + arr[i - 1][j- 1];
                        max = Math.max(max, arr[i][j]);
                    } else{
                        arr[i][j] = 0;
                    }
                }
            }
        }
        return max;
    }


     let str1 = 'aaaxyzaaa'
    let str2 = 'xyqqqxyzqq'

    LCSubstringDP(str1, str2)
}
