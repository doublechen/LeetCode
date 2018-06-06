/**
 * https://leetcode-cn.com/submissions/detail/2951508/
 * 
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for (var i = height.length - 1, j = 0; i >= 0 && j < i; ) {
        if (height[i] > height[j]) {
            var hei = height[j];
            var area = hei * (i - j);
            j++;
        } else {
            var hei = height[i];
            var area = hei * (i - j);
            i--;
        }
        max = area > max ? area : max;
        
    }
    return max;
};