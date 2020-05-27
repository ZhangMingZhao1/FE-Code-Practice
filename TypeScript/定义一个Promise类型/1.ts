/*
  Promise在npm里面已定义过，resolve(value)value的值即是Promise<T> T的值
  一般我们封装请求方法，对axios的返回值定义类型
*/
export type Response<T> = {
  [P in keyof T]: T[P];
} & { code: number | string };

function request(): Promise<Response<T>> {
  return new Promise(
    (reslove) => {
      // async do something
      reslove({ code: 200, data: "ddd" });
    }
    // (reject) => {
    //   reject("11");
    // }
  );
}

// 泛型接口定义普通函数
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray(3, "x"); // ['x', 'x', 'x']

interface AxiosInstance {
  <T = any>(value: T): Promise<T>;
}

let instance: AxiosInstance;
instance = function <T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    resolve(value);
  });
};
instance(100);
