/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 * @param {number} x
 * @return {boolean}
 * https://leetcode.com/submissions/detail/108579862/
 */
var isPalindrome = function(x) {
    x = String(x);
    for (var i = x.length - 1,j = 0; i > j; i--,j++) {
    	if(x[i] != x[j]){
    		return false;
    	}
    }
    return true;
};
