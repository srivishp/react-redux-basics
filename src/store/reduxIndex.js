import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// * REDUCER WITH REDUX TOOLKIT
// redux toolkit allows us to use 'slices' of the global state
// createSlice() needs object as an argument
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      //redux toolkit uses and internal package to detect code like state.counter++
      // and clone the existing state and overwrite the state which we are editing in an immutable way
      // * That means, state.counter++ is not directly manipulating the data store (which is prohibited)
      // * This code can only be written with redux toolkit
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseByFive(state, action) {
      //state.counter = state.counter + action.value;

      // TODO: See Counter.js for explanation
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// // * REDUCER (different from useReducer)
// // giving default value for state
// // ! Only the Reducer can change the data/state
// const counterReducer = (state = initialState, action) => {
//   // * We CANNOT/SHOULD NOT mutate the data in the state, hence data will not be merged into the previous state
//   // but it will be overridden with the updated state by the reducer
//   // ! We cannot mutate state by doing state.counter++
//   // state must always be returned, the old object will be deleted and a new one will be created

//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increaseByFive") {
//     return {
//       // Receiving counter value from the component
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// // * REDUX STORE
// // const store = createStore(counterReducer);

// * REDUX STORE WITH REDUX TOOLKIT
//Connecting slice to redux store
// store only accepts one reducer, but the reducer has multiple slices
// To tackle this, we use configureStore
const store = configureStore({
  // In case of multiple reducers, configureStore will merge all of them in the background into one big reducer
  // An object with key-value pairs should be provided as counter: {key1:value1...}
  // We won't need that in this scenario as we only have one reducer
  reducer: counterSlice.reducer,
});

// * DISPATCHING ACTIONS WITH REDUX TOOLKIT
// createSlice provides actions that can be readily accessed & dispatched
// So we have to export the actions as well, when using redux toolkit
export const counterActions = counterSlice.actions;

// we have to provide the store to the react app
export default store;
