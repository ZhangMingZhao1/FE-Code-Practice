exports.responseTime = function() {
  return function(req, res, next) {
    req._startTime = new Date();
    let calResponseTime = function() {
      var now = new Date();
      var lastTime = now - req._startTime;
      console.log(lastTime);
    };
    res.once("finish", calResponseTime);
    res.once("close", calResponseTime);
    return next();
  };
};
