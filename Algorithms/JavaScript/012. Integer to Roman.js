/**
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * @param {number} num
 * @return {string}
 *
 * https://leetcode.com/submissions/detail/108583110/
 */
var intToRoman = function(num) {
	var roman = '';
	var count = 0;
    if (num >= 1000) {
    	count = Math.floor(num/1000);
    	num = num % 1000;
    	for (var i = count ; i > 0; i--) {
    		roman += 'M';
    	}
    }
    if (num >= 100) {
    	count = Math.floor(num/100);
    	num = num % 100;
    	if (count >= 5) {
    		if (count == 9) {
    			roman += 'CM';
    		} else {
    			roman += 'D';
    			for (i = count - 5 ; i > 0; i--) {
		    		roman += 'C';
		    	}
    		}
    	} else if (count == 4) {
    		roman += 'CD';
    	} else {
    		for ( i = count ; i > 0; i--) {
	    		roman += 'C';
	    	}
    	}
    	
    }
    if (num >= 10) {
    	count = Math.floor(num/10);
    	num = num % 10;
    	if (count >= 5) {
    		if (count == 9) {
    			roman += 'XC';
    		} else {
    			roman += 'L';
    			for (i = count - 5 ; i > 0; i--) {
		    		roman += 'X';
		    	}
    		}
    	} else if (count == 4) {
    		roman += 'XL';
    	} else {
    		for (i = count ; i > 0; i--) {
	    		roman += 'X';
	    	}
    	}
    }
    if (num > 0) {
    	if (num >= 5) {
    		if (num == 9) {
    			roman += 'IX';
    		} else {
    			roman += 'V';
    			for (i = num - 5 ; i > 0; i--) {
		    		roman += 'I';
		    	}
    		}
    	} else if (num == 4) {
    		roman += 'IV';
    	} else {
    		for (i = num ; i > 0; i--) {
	    		roman += 'I';
	    	}
    	}
    }
    return roman;
};