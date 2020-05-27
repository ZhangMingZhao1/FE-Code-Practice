import React from "react";
import { Store, Dispatch, Action } from "./createStore";

export interface ProviderProps {
  store: Store;
}

const StoreContext = React.createContext({
  store: {},
});

// Provider组件实现，原理使用context API
export class Provider extends React.Component<ProviderProps> {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    let value = {
      store: this.props.store,
    };
    // 利用Context API 将store传到子组件中
    return (
      <StoreContext.Provider value={value}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
type mapStateType = (state: any) => any;
type mapDispatchType = (dispatch: (action: Action) => any) => any;

export const connect = (
  mapStateToProps: mapStateType,
  mapDispatchToProps: mapDispatchType
) => {
  return (Componetn: React.ElementType) => {
    return class NewComponent extends React.Component<any> {
      state = {};
      static ContextType = StoreContext;
      constructor(props: any, context: any) {
        super(props);
      }
      componentDidMount(): void {
        let store = this.context.store as Store;
        store.subscribe(this.update); // 核心，每次dispatch，就会重新引发update，从而使子组件rerender
        this.update();
      }
      private update = () => {
        let store = this.context.store as Store;
        let state = store.getState();
        const filterState = mapStateToProps(state); // !!
        const actions = mapDispatchToProps(store.dispatch); // !!
        this.setState({ ...filterState, ...actions });
      };
      render(): React.ReactNode {
        return <Component {...this.state} />;
      }
    };
  };
};
