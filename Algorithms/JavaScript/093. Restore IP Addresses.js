/**
 * @param {string} s
 * @return {string[]}
 * https://leetcode.com/submissions/detail/95127471/
 */
var restoreIpAddresses = function(s) {
    var rules = {
        4:[[1,1,1,1]],
        5:[[1,1,1,2],[1,1,2,1],[1,2,1,1],[2,1,1,1]],
        6:[[1,1,1,3],[1,1,3,1],[1,3,1,1],[3,1,1,1],[1,1,2,2],[1,2,1,2],[1,2,2,1],[2,2,1,1],[2,1,2,1],[2,1,1,2]],
        7:[[1,1,2,3],[1,1,3,2],[1,3,2,1],[3,1,2,1],[1,2,1,3],[2,1,1,3],[1,2,3,1],[2,1,3,1],[2,3,1,1],[1,3,1,2],[3,2,1,1],[3,1,1,2],[1,2,2,2],[2,1,2,2],[2,2,1,2],[2,2,2,1]],
        8:[[2,2,2,2],[2,2,1,3],[2,2,3,1],[2,3,1,2],[3,2,1,2],[2,1,2,3],[1,2,2,3],[2,1,3,2],[1,2,3,2],[1,3,2,2],[2,3,2,1],[3,1,2,2],[3,2,2,1],[3,3,1,1],[3,1,3,1],[1,1,3,3],[1,3,1,3],[1,3,3,1],[3,1,1,3]],
        9:[[3,3,1,2],[3,3,2,1],[3,2,1,3],[2,3,1,3],[3,1,3,2],[1,3,3,2],[3,1,2,3],[1,3,2,3],[1,2,3,3],[3,2,3,1],[2,1,3,3],[2,3,3,1],[2,2,2,3],[2,2,3,2],[2,3,2,2],[3,2,2,2]],
       10:[[3,3,3,1],[3,3,1,3],[3,1,3,3],[1,3,3,3],[3,3,2,2],[2,2,3,3],[3,2,3,2],[2,3,2,3],[2,3,3,2],[3,2,2,3]],
       11:[[3,3,3,2],[3,3,2,3],[3,2,3,3],[2,3,3,3]],
       12:[[3,3,3,3]]
    };
    var len = s.length;
    var rule = rules[len];
    var result = [];
    if(rule){
    	for (var i = rule.length - 1; i >= 0; i--) {
	    	var resultline = '';
	    	var numstr = s;
	    	var flag = 0;
	    	for (var j = 0; j <= 3; j++) {
	    		var str = numstr.substr(0,rule[i][j]);
	    		if(parseInt(str) > 255 || (str.substr(0,1) == '0' && str.length > 1)){
	    			flag = 1;
	    			break ;
	    		}
	    		numstr = numstr.substr(rule[i][j]);
	    		resultline += str;
	    		if(j != 3){
	    			resultline += '.';
	    		}
	    	};
	    	if(!flag){
	    		result.push(resultline);
	    	}
	    	
	    };
    }
    
    return result;
};
