import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, Action, Dispatch, Store } from "./createStore";
import { Provider, connect } from "./Provider";

// Action
const INCREMENT = "increment";
const DECREMENT = "decrement";

function increment(): Action {
  return {
    type: INCREMENT,
  };
}

function decrement(): Action {
  return {
    type: DECREMENT,
  };
}

// Reducer
type StoreState = {
  value: number;
};

function reducer(state: StoreState = { value: 0 }, action: Action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        value: state.value + 1,
      };
    }
    case DECREMENT: {
      return {
        value: state.value - 1,
      };
    }
    default: {
      return state;
    }
  }
}

// Store
let CountStore = createStore(reducer);

type CountProps = {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

function Count(props: CountProps) {
  return (
    <div className="count-block">
      <button className="increment-button" onClick={props.onIncrement}>
        +
      </button>
      <span className="text-block">{props.count}</span>
      <button className="decrement-button" onClick={props.onDecrement}>
        -
      </button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.value,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
});
const CountContainer: React.ElementType = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);

type MyAppProps = {
  store: Store;
};

class MyApp extends React.Component<MyAppProps> {
  constructor(props: MyAppProps) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <CountContainer />
      </Provider>
    );
  }
}

const render = () =>
  ReactDOM.render(
    <MyApp store={CountStore} />,
    document.getElementById("root") as HTMLElement
  );
CountStore.subscribe(render);
render();
