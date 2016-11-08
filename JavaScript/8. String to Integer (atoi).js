/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    if(!str){
        return 0;
    }
    var is_minu = 1;
    if(str.charAt(0) == '-'){
        is_minu = -1;
        str = str.substr(1,str.length - 1);
    }else if(str.charAt(0) == '+'){
        str = str.substr(1,str.length - 1);
    }
    var sum = 0;
    var slen = str.length;
    for(var i = 0; i < slen; i++){
        var num = parseInt(str.charAt(i));
        if(!isNaN(num)){
            sum += num * Math.pow(10,slen - i - 1);
        }else{
            sum = sum / Math.pow(10,slen - i);
            break;
        }
    }
    sum = sum * is_minu;
    if(sum > 2147483647){
        sum = 2147483647;
    }
    if(sum < -2147483648){
        sum = -2147483648;
    }
    return sum;
};

String.prototype.trim = function() { 
    return this.replace(/(^\s*)|(\s*$)/g, ''); 
};