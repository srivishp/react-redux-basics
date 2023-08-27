import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // useSelector helps get a slice or a small part of a huge state easily
  // here we are getting state.counter
  // React-redux automatically sets up a subscription to the store for the component, if you use useSelector
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
