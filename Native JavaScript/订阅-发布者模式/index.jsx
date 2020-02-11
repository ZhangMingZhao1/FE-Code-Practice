const emitter = new EventEmitter()
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')
// => Hello ScriptOJ
// => Good night, ScriptOJ

emitter.off('hi', sayHi)
emitter.emit('hi', 'ScriptOJ')
// => Good night, ScriptOJ

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)
// => I am Jerry, and I am 12 years old

class EventEmitter {
  /* TODO */
  constructor() {
    this.events = {}
  }

  //注意这里的cb其实就是就要监听的函数，push的函数名，调用该函数就是函数名加().
  on(name, cb) {
    //一个事件名可能绑定了多个回调函数
    const cbs = this.events[name] || []
    cbs.push(cb);
    this.events[name] = cbs;
  }

  on(name,cb) {
    const cbs = this.events[name];
    cbs.push(cb);
    this.events[name] = cbs;
  }

  emit(name,...args) {
    const cbs = this.events[name];

    cbs.forEach((cb) => {
      cb(...args);
    })
  }

  emit(name, ...args) {
    //针对该事件，执行每个回调函数
    const cbs = this.events[name] || []
    cbs.forEach( cb => {
      cb(...args);
    });
  }

  off(name,cb) {
    const cbs = this.events[name] || [];
    for(let i = 0,len = cbs.length; i < len; i++) {
      if(cbs[i] === cb) {
        return cbs.splice(i,1);
      }
    }
  }
}