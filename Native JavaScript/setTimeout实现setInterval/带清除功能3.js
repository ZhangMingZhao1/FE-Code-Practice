let timeMap = {};
let id = 0; // 简单实现id唯一
const mySetInterval = (cb, time) => {
  let timeId = id; // 将timeId赋予id
  id++; // id 自增实现唯一id
  let fn = () => {
    cb();
    timeMap[timeId] = setTimeout(() => {
      fn();
    }, time);
  };
  timeMap[timeId] = setTimeout(fn, time);
  return timeId; // 返回timeId
};

const timeid = mySetInterval(() => {
  console.log(111);
}, 1000);

const myClearInterval = (id) => {
  clearTimeout(timeMap[id]); // 通过timeMap[id]获取真正的id
  delete timeMap[id];
};
myClearInterval(timeid);
