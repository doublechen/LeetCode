/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var maxlen = 0;
    var len = 0;
    for(var i = nums.length - 1 ;i >= 0; i--){
        if(nums[i] == 1){
            len ++;
        }else{
            if(len > maxlen){
                maxlen = len;
            }
            len = 0;
        }
    }
    
    if(nums[0] == 1 && len > maxlen){
        return len;
    }
    return maxlen;
};