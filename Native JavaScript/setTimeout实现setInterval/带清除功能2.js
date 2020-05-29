{
  const intervals = new Map();

  function setInterval(fn, time, context, ...args) {
    const id = Math.floor(Math.random() * 10000);
    intervals.set(
      id,
      setTimeout(function next() {
        fn.apply(context, args);
        intervals.set(id, setTimeout(next, time));
      }, time)
    );
    return id;
  }

  function clearInterval(id) {
    clearTimeout(intervals.get(id));
  }
}

const interval = setInterval(console.log, 100, console, "hi");

clearInterval(interval);
