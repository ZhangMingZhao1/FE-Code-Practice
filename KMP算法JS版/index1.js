var S, T;
var next = [];

// 预计算next数组
function getNext() {
	let k = -1,
		j = 0;
	next[0] = -1;
	while (j < len_t) {
		if (k == -1 || T[j] == T[k]) {
			++j;
			++k;
			next[j] = k;
		} else k = next[k];
	}
}

// 返回子串首次出现的位置
function KMP_Index() //T是模式串，S是 主串 
{
	let i = 0,
		j = 0;
	getNext();
	while (j < len_t && i < len_s) {
		if (j == -1 || T[j] == S[i]) {
			i++;
			j++;
		} else j = next[j];
	}
	if (j == len_t) {
		return i - len_t;
	} else return -1;
}

//返回子串出现的次数
function KMP_Count() {
	let ans = 0;
	let i = 0,
		j = 0;

	getNext();
	for (i = 0; i < len_s; i++) {
		while (j > 0 && T[j] != S[i]) {
			j = next[j];
		}
		if (T[j] == S[i]) j++;
		if (j == len_t) {
			ans++;
			j = next[j];
		}
	}
	return ans;
}

S = "123454321";
T = "0"
len_s = S.length;
len_t = T.length;

//KMP_Index()如果为-1则没有匹配
console.log(`主串为${S},模式串为${T},模式串首次出现的位置为${KMP_Index()},出现的次数为${KMP_Count()}`);