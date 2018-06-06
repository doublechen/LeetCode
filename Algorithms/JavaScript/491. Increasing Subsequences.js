/**
 * Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .
 * Example:
 * Input: [4, 6, 7, 7]
 * Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 * Note:
 * 1.The length of the given array will not exceed 15.
 * 2.The range of integer in the given array is [-100,100].
 * 3.The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    nums = quickSort(nums);
    let len = num.length;
    let res = [];
    for (var i =  0; i < len; i++) {
    	var tmp = [];
    	for (var j = i+1; j < num.length; j++) {
    		for (var k = tmp.length - 1; j >= 0; j--) {
				tmp[i].concat(nums[j]);
			}
    		if (nums[j+1] != nums[j]) {
    			tmp.push([nums[i],nums[j]]);
    		}
    		
    	}
    	res.concat(tmp);
    }
    return res;
};

var quickSort = function(arr){
	if (arr.length <= 1) {
		return arr;
	}
	var halfkey = arr.length >> 1;
	var left = [];
	var right = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[halfkey] > arr[i]) {
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(arr[halfkey],quickSort(right));
}