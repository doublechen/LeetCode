/**
 *Given a roman numeral, convert it to an integer.
 *Input is guaranteed to be within the range from 1 to 3999
 * 
 * @param {string} s
 * @return {number}
 *
 * https://leetcode.com/submissions/detail/108587758/
 * https://leetcode.com/submissions/detail/108588734/
 */
var romanToInt = function(s) {
	var sl = s.length;
    var map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
    
	var sum = 0;

    for (var i = 0; i < sl; i++) {
    	if (map[s[i]] < map[s[i+1]]) {
    		sum += map[s[++i]] - map[s[i]];
    	} else {
    		sum += map[s[i]]
    	}
    }
    
    return sum;
};