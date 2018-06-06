/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = quickSort(nums);
    var len = nums.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
        var ret = twoSum(nums.slice(i + 1), 0 - nums[i]);
        for (var j = ret.length - 1; j >= 0; j--) {
            ret[j].unshift(nums[i]);
            if (!arr.length) {
                arr.push(ret[j]);
            } else {
                var flag = 0;
                for (var k = 0; k < arr.length; k++) {
                    if (arr[k][0] == ret[j][0] && arr[k][1] == ret[j][1]) {
                        flag = 1;
                    }
                }
                if (!flag) {
                    arr.push(ret[j]);
                }
            }
        }
    }
    return arr;
};



var twoSum = function(nums, target) {
    var ret = [];
    for (var i = nums.length - 1,j = 0; i > j; ) {
        var sum = nums[i] + nums[j];
        if(sum > target){
            i--;
        }else if(sum < target){
            j++;
        }else if(sum == target){
            ret.push([nums[j],nums[i]]);
            i--;
            j++;
        }
    }
    return ret;
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