// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split("")
//     // console.log(lines);
// }
// print(ans);


// var arr = readline();
var arr = 'CCDCC';
var ans1=0;
var index = 0;
var len = arr.length;
var c = 0,d=0;

// for(var i in arr) {
//     if(arr[i]=='C') c++;
//     else d++;
// }
// var tmp = c>=d?'D':'C';

for(var i in arr) {
    if(arr[i]==='D') {
        ans1+=parseInt(i);
        index++;
    }
}
// console.log(ans1);
var sum1 = 0,sum2 = 0;
var cur1 = len-1,cur2 = 0;
for(var j = 0; j < index; j++) {
    sum1+=cur1;
    cur1--;
    sum2+=cur2
    cur2++;
}
var res = 0;
res = Math.min(ans1-sum2,sum1-ans1);
console.log(res)
// print(res)
