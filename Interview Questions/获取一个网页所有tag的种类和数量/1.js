let all = document.getElementsByTagName("*");
let tags = [];

for (let i = 0; i < all.length; i++) {
  tags.push(all[i].tagName.toLocaleLowerCase());
}

let res = {};

for (let i = 0; i < tags.length; i++) {
  if (!res[tags[i]]) {
    res[tags[i]] = 1;
  } else {
    res[tags[i]]++;
  }
}

console.log(res);
