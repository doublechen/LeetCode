/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var lnums = nums.length;
    for(var i = 0 ; i < lnums; i++){
        for( var j = i + 1; j < lnums; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
};