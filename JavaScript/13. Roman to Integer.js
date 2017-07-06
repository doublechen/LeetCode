/**
 *Given a roman numeral, convert it to an integer.
 *Input is guaranteed to be within the range from 1 to 3999
 * 
 * @param {string} s
 * @return {number}
 *
 * https://leetcode.com/submissions/detail/108587758/
 */
var romanToInt = function(s) {
	var sl = s.length;
    var map = new Map();
    map.set("M",1000);
    map.set("D",500);
    map.set("C",100);
    map.set("L",50);
    map.set("X",10);
    map.set("V",5);
    map.set("I",1);
    
	var res = [];
	var sum = 0;

    for (var i = 0; i < sl; i++) {
    	if (i == 0 ) {
    		res.push(s[0]);
            
    	} else {
    		if(map.get(s[i-1]) < map.get(s[i])){
    			res[res.length - 1] = s[i-1] + s[i];
    		} else {
                res.push(s[i]);
            }
    	}
    }
    for (var j = res.length - 1; j >= 0; j--) {
    	if (res[j].length == 1) {
    		sum += map.get(res[j]);
    	} else {
    		sum += map.get(res[j][1]) - map.get(res[j][0]);
    	}
    }
    return sum;
};