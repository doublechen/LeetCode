/**
 * @param {number} n
 * @return {boolean}
 * https://leetcode.com/submissions/detail/95129558/
 */
var isPowerOfTwo = function(n) {
    if(n == 1){
        return true;
    }
    while(n && 0 == n % 2 ){
        n = n / 2;
        if(n == 1){
            return true;
        }
    }
    return false;
};