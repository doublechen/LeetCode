/**
 * https://leetcode-cn.com/submissions/detail/2951508/
 * 
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 画 n 条垂直线，使得垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 注意：你不能倾斜容器，n 至少是2。
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