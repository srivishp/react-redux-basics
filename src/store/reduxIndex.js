// IMPORT REDUX
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// REDUCER (different from useReducer)
// giving default value for state
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  // Receiving counter value from the component
  if (action.type === "increaseByFive") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

// REDUX STORE
const store = createStore(counterReducer);

// we have to provide the store to the react app
export default store;
