Array.prototype._map = function(fn, callbackthis) {
  let res = [];
  let context = callbackthis || null;
  this.reduce((before, cur, index, arr) => {
    res.push(fn.call(context, cur, index, arr));
  }, null);
  return res;
};
