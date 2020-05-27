interface Props<T> {
  content: T;
}
// 函数泛型组件
function Foo<T>(props: Props<T>) {
  return <div> {props.content}</div>;
}
const App = () => {
  return (
    <div className="App">
      <Foo content={42}></Foo>
      <Foo<string> content={"hello"}></Foo>
    </div>
  );
};

// 类泛型组件
class Bar<T> extends React.Component<Props<T>> {
  render() {
    return <div>{this.props.content}</div>;
  }
}

const App = () => {
  return (
    <div className="App">
      <Bar content={42}></Bar>
      <Bar<string> content={"hello"}></Bar>
    </div>
  );
};
