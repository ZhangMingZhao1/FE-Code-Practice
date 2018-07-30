var url = [xxx,xxx,xxx];

function getData(_url) {
  Promise.resolve(jQuery.get(url[0]).then(function(data) {
    console.log(data);
    getData(_url.slice(1));
  }) )
}

getData(url);