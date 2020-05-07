// 防止请求延时带来的脏数据

export const useRequest = (fn, dependencies, defaultValue = []) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = () => {
    // 定义cancel标志位
    let cancel = false;
    setLoading(true);
    fn()
      .then((res) => {
        if (!cancel) {
          setData(res);
        } else {
          // 在请求成功取消掉后，打印测试文本。
          const { tab } = res;
          console.log(`request with ${tab} canceled`);
        }
      })
      .catch(() => {
        if (!cancel) {
          setError(error);
        }
      })
      .finally(() => {
        if (!cancel) {
          setLoading(false);
        }
      });

    // 请求的方法返回一个 取消掉这次请求的方法
    return () => {
      cancel = true;
    };
  };

  // 重点看这段，在useEffect传入的函数，返回一个取消请求的函数
  // 这样在下一次调用这个useEffect时，会先取消掉上一次的请求。
  useEffect(() => {
    const cancelRequest = request();
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line
  }, dependencies);

  return { data, setData, loading, error, request };
};
