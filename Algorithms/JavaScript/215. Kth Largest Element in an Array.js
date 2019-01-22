/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * 
 *  Example 1:
 *  
 *  Input: [3,2,1,5,6,4] and k = 2
 *  Output: 5
 *  Example 2:
 *  
 *  Input: [3,2,3,1,2,4,5,5,6] and k = 4
 *  Output: 4
 *  Note: 
 *  You may assume k is always valid, 1 ≤ k ≤ array's length.
 *  https://leetcode-cn.com/submissions/detail/11938258/
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        if (arr.length < k) {
            arr = insertVal(arr, nums[i]);
        } else if (arr.length >= k && nums[i] >= arr[0]) {
            arr = replaceVal(arr, nums[i]);
        }
    }
    return arr[0];
};

var insertVal = function(arr, val){
    var newarr = [];
    var inserted = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > val && !inserted) {
            newarr.push(val);
            newarr.push(arr[i]);
            inserted = 1;
        } else {
            newarr.push(arr[i]);
        }
    }
    if (!inserted) {
        newarr.push(val);
    }
    return newarr;
}

var replaceVal = function(arr, val){
    var newarr = [];
    var inserted = 0;
    for (var i = 0; i + 1 < arr.length; i++) {
        if (val >= arr[i] && val <= arr[i+1] && !inserted) {
            newarr.push(val);
            newarr.push(arr[i+1]);
            inserted = 1;
        } else {
            newarr.push(arr[i+1]);
        }
    }
    if (!inserted) {
        newarr.push(val);
    }
    return newarr;
}
