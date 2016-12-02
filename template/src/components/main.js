import React from 'react';

import styles from './main.css';

// Presentational Component
// Try to keep logic out of these and rather put them into the container HOC
export default ({
  counter,
  incrementCounter,
  decrementCounter,
  input,
  updateText
}) => (
  <div className={styles.hashedClassExample}>
    <h1 className={styles.title}>{{ name }}</h1>
    <div>{counter}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
    <hr/>
    <div>{input}</div>
    <input onChange={updateText}></input>
  </div>
);
