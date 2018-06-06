/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var slen = s.length;
    var len = 0, len1 = 0, len2 = 0, start = 0;
    for(var i = 0; i < slen; i++){
        var j = 1;
        while(s.charAt(i + j) == s.charAt(i - j) && s.charAt(i + j)){
            j++;
        }
        len1 = 2*j - 1;
        
        j = 0;
        while(s.charAt(i + j + 1) == s.charAt(i - j) && s.charAt(i + j + 1)){
            j++;
        }
        len2 = 2*j;
        
        if(len < len1 || len < len2){
            if(len1 > len2){
                len = len1;
                start = i - (len1 - 1) / 2;
            }else{
                len = len2;
                start = i - (len2 / 2) + 1;
            }
        }
        
    }
    return s.substr(start,len);
};