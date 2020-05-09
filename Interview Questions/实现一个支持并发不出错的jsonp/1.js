function sendJsonp(params) {
  let uniqueFuncName = Symbol("callback");
  window[uniqueFuncName] = params.callback;
  $("head").append(
    `<script src='${params.url}?callback=uniqueFuncName'></script>`
  );
  // var timeout = params.timeout;
}
sendJsonp({
  url: "http:xxx",
  callback: (err, data) => {
    console.log("callback", err, data);
  },
  timeout: 100000,
});
