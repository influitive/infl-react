import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';
import { createSelector, createStructuredSelector } from 'reselect';

// REDUCER 1
// Create an action creator (description is optional)
const incrementCounter = createAction('INCREMENT');
const decrementCounter = createAction('DECREMENT');


// Create a reducer
const counter = createReducer({
  [incrementCounter]: (state) => state + 1,
  [decrementCounter]: (state) => state - 1
}, 0); // <-- This is the default state

// Counter selector (we create a function that abstracts how we access the counter state
// We can locate that next to the reducer to keep state logic in one place
// For more info about the concept and the library we use for more complex selectors please see
// https://github.com/reactjs/reselect
export const counterSelector = state => state.counter;


// REDUCER 2 (feel free to separate reducers into their own files if they are large)

const setInput = createAction('SET_INPUT');

const input = createReducer({
  [setInput]: (_, payload) => payload
}, '');

export const inputSelector = state => state.input;


// Export our actions so we can use them in connect(_, actions)
export const actions = {
  incrementCounter,
  decrementCounter,
  setInput
};

// Combine two selectors into a selector that we can use in 'mapStateToProps'
export const rootSelector = createStructuredSelector({
  counter: counterSelector,
  input: inputSelector
});

// Combine two reducers
// Each reducers state will show up under the key we specify
export default combineReducers({
  counter,
  input
});
