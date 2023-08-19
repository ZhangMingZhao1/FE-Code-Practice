/**
max 是最大并发数量值，维护一个请求并发队列requestsQueue，不断的往里面塞请求，请求返回结果的就出队
 */
function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then(res => {
      const len = results.push(res);
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        // 这里为什么不判断 max大小呢，因为刚shift出去一个，从then里面递归的handleRequest都是一个进，一个出。并发数量的增加是在下面的push
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        'function' === typeof callback && callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}

const urls = Array.from({length: 10}, (v, k) => k);

const fetch = function (idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    // 模拟请求时间
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx)
    }, timeout)
  })
};

const max = 4;

const callback = () => {
  console.log('run callback');
};

handleFetchQueue(urls, max, callback);


