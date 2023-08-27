// IMPORT REDUX
import redux, { createStore } from "redux";

// REDUCER (different from useReducer)
// gvging default value for state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

// REDUX STORE
const store = createStore(counterReducer);

// we have to provide the store to the react app
export default store;
