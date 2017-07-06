

var twoSum = function(nums, target) {
    nums = quickSort(nums);
    for (var i = nums.length - 1,j = 0; i >= j; ) {
    	if(nums[i] + nums[j] > target){
    		j--;
    	}else if(nums[i] + nums[j] > target){
    		i++;
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