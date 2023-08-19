// splice会改变原数组
function sendRequest(urls, num, callback) {
  (function request(res) {
    urls.length
      ? Promise.all(urls.splice(0, num).map((url) => fetch(url))).then((r) => request(res.concat(r)))
      : callback(res)
  })([])
}
