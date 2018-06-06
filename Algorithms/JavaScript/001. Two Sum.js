/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.

 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].

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


/**
 * solution2
 * @param  {[type]} nums   [description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
var twoSum = function(nums, target) {
    nums = quickSort(nums);
    for (var i = nums.length - 1,j = 0; i >= j; ) {
        if(nums[i] + nums[j] > target){
            j++;
        }else if(nums[i] + nums[j] < target){
            i--;
        }else{
            return [nums[j],nums[i]];
        }
    }
};

var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
