//目标代码
const obj = {
  name: " jsCoder",
  skill: ["es6", "react", "angular"],
  say: function() {
    var that = this;
    for (var i = 0, len = this.skill.length; i < len; i++) {
      (function(k) {
        setTimeout(function() {
          console.log(k);
          console.log(that.skill[k]);
        }, (i + 1) * 1000);
      })(i);
    }
  }
};
obj.say();
