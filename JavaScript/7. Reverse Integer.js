/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var is_minus = 0;
    if(x < 0){
        is_minus = 1;
    }
    var strx = String(Math.abs(x));
    var ret = '';
    for(var i = strx.length - 1; i >= 0 ; i--){
        ret += strx.charAt(i);
    }
    if(is_minus){
        ret = '-' + ret;
    }
    ret = parseInt(ret);
    if(ret > 2147483647 || ret < -2147483648){
        return 0;
    }
    return ret;
};