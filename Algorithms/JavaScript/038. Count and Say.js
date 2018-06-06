/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var num = 0;
    for(var i = 0; i < n; i++){
        num = countOne(num);
    }
    return num;
    
};

var countOne = function(n){
    if(0 === n){
        return '1';
    }
    var sn = String(n);
    var snlen = sn.length;
    var count = 1;
    var res = '';
    for(var i = 0;i < snlen; i++){
        if(sn.charAt(i) != sn.charAt(i+1)){
            res += String(count) + sn.charAt(i);
            count = 1;
        }else{
            count ++;
        }
    }
    return res;
};