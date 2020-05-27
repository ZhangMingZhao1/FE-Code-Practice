// 合并区间
// 括号合并

Promise.all = function (promiseArrs) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let i = 0;
    function handleData(index, data) {
      //处理数据函数
      arr[index] = data;
      i++;
      if (i === promiseArrs.length) {
        resolve(arr);
      }
    }
    for (let i = 0; i < promiseArrs.length; i++) {
      promiseArrs[i].then((data) => {
        handleData(i, data);
      }, reject);
    }
  });
};

// 只要有一个满足resolve状态的就resolve，如果全部都是reject，就都reject
Promise.some = function (promiseArrs) {
  return new Promise((resolve, reject) => {
    let arr = []; //定义一个空数组存放结果
    let i = 0;
    function handleErr(index, err) {
      //处理错误函数
      arr[index] = err;
      i++;
      if (i === promiseArrs.length) {
        //当i等于传递的数组的长度时
        reject(err); //执行reject,并将结果放入
      }
    }
    for (let i = 0; i < promiseArrs.length; i++) {
      //循环遍历数组
      promiseArrs[i].then(resolve, (e) => handleErr(i, e));
    }
  });
};
