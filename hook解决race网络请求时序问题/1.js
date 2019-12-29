/**
 * 问题：
 * 当我们输入react12345时，可以看到最终的结果是react1 result，
 * 而我们期望看到的结果是react12345 result。
 * 虽然await保证了后面的set一定是在获取数据之后，但是由于query输入的变化，
 * 执行了两次useEffect，都在事件队列里。且第二个比第一个先set到数据。导致最后数据被前一个覆盖。
 * 这现象的原因是更新数据的时候，没有对结果的有效性进行判断，用过期的数据覆盖了最新的数据。
 */

// 模拟网络请求，可以指定延迟时间
function getData(data, delay) {
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(`${data} result`);
      }, delay);
    })
  }
  
  function App() {
    const [query, setQuery] = useState('react');
    const [result, setResult] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        // 搜索 react1 时（第一个请求），2 秒后返回，其余 500 毫秒后返回
        const delay = query === 'react1' ? 2000 : 500;
        
        const result = await getData(query, delay);
        
        setResult(result); 
      }
  
      fetchData();
    }, [query]);
  
    return (
      <Fragment>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <div>
          result: <span>{result}</span>
        </div>
      </Fragment>
    );
  }

useEffect(() => {
  // 有效性标识
  let didCancel = false;

  const fetchData = async () => {
    const delay = query === "react1" ? 2000 : 500;
    const result = await getData(query, delay);

    // 更新数据前判断有效性
    if (!didCancel) {
      setResult(result);
    }
  };

  fetchData();

  return () => {
    // query 变更时设置数据失效
    didCancel = true;
  };
}, [query]);



// 请求序号
let seqenceId = 0;
// 上一个有效请求的序号
let lastId = 0;

function App() {
  const [query, setQuery] = useState('react');
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // 发起一个请求时，序号加 1
      const curId = ++seqenceId;

      const delay = query === 'react1' ? 2000 : 500;
      const result = await getData(query,delay);

      // 只展示序号比上一个有效序号大的数据
      if (curId > lastId) {
        setResult(result); 
        lastId = curId;
      } else {
        console.log(`discard ${result}`); 
      }
    }

    fetchData();
  }, [query]);

  return (
    ...
  );
}