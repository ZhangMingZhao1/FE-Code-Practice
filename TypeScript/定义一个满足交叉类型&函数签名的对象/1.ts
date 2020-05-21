type A = {
  test: (num: string) => string;
};

type B = {
  test: (num: number) => number;
};

type C = A & B;

const c: C = {
  test: <T extends number | string>(num: T): T => {
    return num;
  },
};

// function AAA<T>(a: T): T {
//   return a;
// }

// AAA("dsadsa");
