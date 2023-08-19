
async function async1() {
  console.log(1)
  await async2()
  console.log(2)
  return await 3
}
async function async2() {
  console.log(4)
}

setTimeout(function() {
  console.log(5)
}, 0)

async1().then(v => console.log(v))
new Promise(function(resolve) {
  console.log(6)
  resolve();
  console.log(7)
}).then(function() {
  console.log(8)
})
console.log(9)




async function async1() {
  console.log(1)
  return 3
}

setTimeout(function() {
  console.log(5)
}, 0)

async1()
new Promise(function(resolve) {
  console.log(6)
  resolve();
  console.log(7)
}).then(function() {
  console.log(8)
})
console.log(9)