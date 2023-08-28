import { counterActions } from "../store/reduxIndex";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  // useSelector helps get a slice or a small part of a huge state easily
  // here we are getting state.counter
  // React-redux automatically sets up a subscription to the store for the component, if you use useSelector
  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    //dispatch({ type: "toggle" });
    // * Using counterActions that we imported from redux toolkit
    // () are needed as we are executing the function right away
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  // adding payload while dispatching actions
  const increaseByFiveHandler = () => {
    //dispatch({ type: "increaseByFive", value: 5 });

    // payload can be added in the () directly or as an object
    dispatch(counterActions.increaseByFive(5));
    // TODO: Here the payload is stored as payload: and not a variable name set by the developer
    // TODO: It is done by toolkit in the background. So we have to change action.value to action.payload in the slice
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} className={classes.button}>
          Increment
        </button>
        <button onClick={increaseByFiveHandler} className={classes.button}>
          Increase by 5
        </button>
        <button onClick={decrementHandler} className={classes.button}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
