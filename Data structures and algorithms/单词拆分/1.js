/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let wordSet = new Set(wordDict);
    let len = s.length;
    let memo = [];
    function canBreak(start) {
        if(start===len) 
            return true
        if(memo[start]!==undefined) return memo[start];
        for(let i = start+1; i <= len; i++) {
            if(wordSet.has(s.slice(start,i)) && canBreak(i)) {
                // 能进来表明以i为start开头的串可以
                memo[i] = true;
                return true;
            }
        }
        memo[start] = 0;
        return false;
    }
    return canBreak(0);
};

console.log(wordBreak("leetcode",["leet","code"]))