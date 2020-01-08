function foo(k) {
  if (k === 6) return;
  setTimeout(function() {
    console.log(k);
    foo(++k);
  }, 1000);
}
foo(1);
