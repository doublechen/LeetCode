/**
 *
 * https://leetcode-cn.com/submissions/detail/2949402/
 * 
 * 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"
 * 
 * 实现一个将字符串进行指定行数变换的函数:
 * 
 * string convert(string s, int numRows);
 * 示例 1:
 * 
 * 输入: s = "PAYPALISHIRING", numRows = 3
 * 输出: "PAHNAPLSIIGYIR"
 * 示例 2:
 * 
 * 输入: s = "PAYPALISHIRING", numRows = 4
 * 输出: "PINALSIGYAHRPI"
 * 解释:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1){
        return s;
    } else {
        var colcount = Math.ceil(s.length / (2 * numRows - 2)) * (numRows - 1);
    }
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        var pos = getPos(i, numRows);
        if (!arr[pos[0]]) {
            arr[pos[0]] = [];
        }
        arr[pos[0]][pos[1]] = s[i];
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j]) {
                ret += arr[i][j];
            }
        }
    }
    return ret;
};

var getPos = function(pos, numRows){
    if (numRows <= 1) {
        return [pos, 1];
    }
    // 第几组
    var groupno = Math.floor(pos / (2 * numRows - 2));
    // 组内位置
    var groupindex = pos % (2 * numRows - 2);
    // 小于行数 就在组内第一列
    if (groupindex < numRows) {
        var posy = groupno * (numRows - 1);
        var posx = groupindex;
    } else {
        var posmod = groupindex % numRows;
        var posy = groupno * (numRows - 1) + posmod + 1;
        var posx = (numRows - 1) - ( posmod + 1);
    }
    return [posx, posy];
};





