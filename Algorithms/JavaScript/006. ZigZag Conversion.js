/**
 *
 * https://leetcode-cn.com/submissions/detail/2949402/
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a number of rows:
 * 
 * string convert(string s, int numRows);
 * Example 1:
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * Example 2:
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
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





