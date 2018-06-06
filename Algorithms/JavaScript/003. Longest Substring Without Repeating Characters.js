/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var slength = s.length;
    var maxlen = 0,i = 0, j = 0;
    var arr = [];
    while(i < slength && j < slength){
        if(arr.indexOf(s.charAt(j)) == -1){
            arr.push(s.charAt(j++));
            maxlen = Math.max(maxlen, j - i);
        }else{
            arr.splice(arr.indexOf(s.charAt(i++)),1);
        }
    }
    return maxlen;
};