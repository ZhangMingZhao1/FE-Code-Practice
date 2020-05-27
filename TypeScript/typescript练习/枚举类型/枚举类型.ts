enum Color {
  Red,
  Green,
  Blue,
}

let col = Color.Red;
col = 0; // 有效的，这也是 Color.Red

enum Tristate {
  False,
  True,
  Unknown,
}

// 上述编译后
