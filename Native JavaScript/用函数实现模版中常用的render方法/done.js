const template = "the age of ${name} is ${age}，the age of ${name} is ${age}";
const data = { name: "xiaoming", age: 8};
console.log(render(template, data));
// 输出: "the age of xiaoming is 8"

function render(template,data) {
  for (key in data) {
    if(key) {
      // console.log(key);
      var re = new RegExp("\\${"+key+"}",'g');
      // var re = "${" + key + "}"; // 这块直接使用字符串就行，不用正则也可以
      console.log(re,data[key]);
      template = template.replace(re,data[key]);
      // console.log("test:",template.replace("${name}","xiaoming"));
      console.log(template); 
    }
    
  }
}
