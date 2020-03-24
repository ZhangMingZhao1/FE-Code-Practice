function showData(msg) {
  console.log("msg:", msg);
}

let url = "xxx/?func=showData";
let script = document.createElement("script");

script.setAttribute("src", url);
script.setAttribute("type", "text/javascript");

document.getElementsByTagName("head")[0].appendChild(script);
