// 也叫订阅-发布模式，被观察者发生变化时，会通知所有的观察者，广泛用于监听实现

//被观察者
class Subject {
  constructor() {
    this.observers = [] //观察者队列    
  }
  addObserver(observer) {
    this.observers.push(observer) //往观察者队列添加观察者    
  }
  notify() { //通知所有观察者,实际上是把观察者的update()都执行了一遍       
    this.observers.forEach(observer => {
      observer.update() //依次取出观察者,并执行观察者的update方法        
    })
  }
}

//观察者
class Observer {
  update() {
    console.log("被观察者发生事件通知");
  }
}

var ob1 = new Observer() //观察者1
var ob2 = new Observer() //观察者2

var subject = new Subject() //被观察者
subject.addObserver(ob1) //观察者1订阅subject的通知
subject.addObserver(ob2) //观察者2订阅subject的通知
subject.notify() //发出广播,执行所有观察者的update方法