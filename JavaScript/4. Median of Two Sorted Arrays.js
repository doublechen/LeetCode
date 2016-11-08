/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [],r1,r2;
    while(nums1.length || nums2.length){
        r1 = nums1.pop();
        r2 = nums2.pop();
        if(typeof(r1) != 'undefined' && typeof(r2) != 'undefined'){
            if(r1 > r2){
                arr.unshift(r1);
                nums2.push(r2);
            }else{
                arr.unshift(r2);
                nums1.push(r1);
            }
        }else{
            if(typeof(r1) == 'undefined'){
                arr.unshift(r2);
            }else{
                arr.unshift(r1);
            }
        }
        
    }
    while(arr.length > 2){
        arr.pop();
        arr.shift();
    }
    var sum = 0,count = 0;
    for(var i in arr){
        sum += arr[i];
        count ++;
    }
    if(!count){
        return 0;
    }else{
        return sum / count;
    }
    
};