# React 19: Unexpected Behavior with Asynchronous State Updates

This repository demonstrates a potential issue in React 19 related to asynchronous state updates and functional updates.  In certain scenarios, relying on the previous state value within a functional state update might not produce the expected result.

## Bug Description
The issue arises when the state update is not immediate and is subject to React's batching or other asynchronous operations.  The functional update's `prevCount` might not accurately reflect the most recent state value, leading to incorrect calculations or unexpected behavior.

## Reproduction
Clone this repository and run `npm start`. The component will increment the counter.  In certain scenarios (not always reproducible deterministically), you may find that the counter does not increment to the expected value or shows inconsistencies.

## Solution
The solution is to make sure to use the latest state value in the functional update, perhaps using a ref to track the latest value.  For most cases, this will ensure correct behavior.

## Technologies Used
* React 19
* JavaScript