const logger1 = (store) => (next) => (action) => {
  console.log("进入log1");
  let result = next(action);
  console.log("离开log1");
  return result;
};

const logger2 = (store) => (next) => (action) => {
  console.log("进入log2");
  let result = next(action);
  console.log("离开log2");
  return result;
};

const logger3 = (store) => (next) => (action) => {
  console.log("进入log3");
  let result = next(action);
  console.log("离开log3");
  return result;
};


// 实际执行
logger1(    
  console.log('进入logger1')    
      logger2(        
          console.log('进入logger2')        
              logger3(            
                  console.log('进入logger3')            
                  //dispatch()            
                  console.log('离开logger3')        
              )        
          console.log('离开logger2')    
      )    
  console.log('离开logger1')
)

