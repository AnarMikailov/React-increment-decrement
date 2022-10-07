import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <div className="button">
      <button onClick={decrement}>-</button>
      <p>{state.count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
