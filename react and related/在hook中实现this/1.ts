import React from "react";

type ReactClassInstance<S> = {
  state: S;
  setState: (newState: Partial<S>) => void;
};

export function useConstructor<S = any>(
  constructorFn: (this: ReactClassInstance<S>) => void
): ReactClassInstance<S> {
  React.useDebugValue("useConstructor");

  const [state, setState] = React.useState({} as S);
  const [isConstructed, setConstructed] = React.useState(false);
  const classInstance = new Proxy(
    {},
    {
      set: (_obj: any, prop: string, value: S) => {
        if (prop === "state") {
          setState(value);
        }
        return true;
      },
    }
  );

  if (!isConstructed) {
    constructorFn.call(classInstance);
    setConstructed(true);
  }

  return {
    state,
    setState: (newState) =>
      setState((state) => Object.assign({}, state, newState)),
  };
}

// 使用
import { useConstructor } from '@pveyes/use-less';
function Component() {
 // 如果 JS 引擎不允许你将变量名设为 this，你可以使用斯拉夫字母，如 Т???
 const th?s = useConstructor(function constructor() {
   this.state = {
     text: string;
   }
 });
 // 用回 this.state.xxx 的感觉真好！对，不，对！
 return (
   <input
     value={th?s.state.text} 
     onChange={e => th?s.setState({ text: '' })}
   />
 );
}

