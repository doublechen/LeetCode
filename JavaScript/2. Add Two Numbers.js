/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var num1 = 0;
    var num2 = 0;
    var arr1 = [];
    var arr2 = [];
    while(l1){
        arr1.push(l1.val) ;
        l1 = l1.next;
    }
    while(l2){
        arr2.push(l2.val) ;
        l2 = l2.next;
    }
    var arr1len = arr1.length;
    for(var i = 0; i < arr1len ; i++){
        num1 += arr1[i] * Math.pow(10,(i));
    }
    var arr2len = arr2.length;
    for(var j = 0; j < arr2len ; j++){
        num2 += arr2[j] * Math.pow(10,(j));
    }
    var sum = String(num1 + num2);
    var ret = [];
    for(var k =  sum.length - 1; k >= 0 ; k -- ){
        ret.push(parseInt(sum.charAt(k)));
    }
    return ret;
};