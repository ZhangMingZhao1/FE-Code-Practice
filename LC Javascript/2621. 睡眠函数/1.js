/**
 * @param {number} millis
 */
async function sleep(millis) {
  // 宏任务要先执行里面的微任务，如果settimeout，res回调放里面，res回调是微任务，会先执行微任务，这样外层的then就立即执行了
  return new Promise((res,rej)=>{
      setTimeout(()=>{
          res()
      },millis)
      
  })
 
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/