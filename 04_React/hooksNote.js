/**
 * File: react-hooks-notes.js
 * Description: Detailed notes and examples for React hooks:
 *   - useState: Managing state in functional components.
 *   - useEffect: Handling side effects (API calls, subscriptions, timers, etc.).
 *   - useMemo: Memoizing expensive computations.
 *   - useCallback: Memoizing callback functions to optimize rendering.
 *   - useRef: Persisting mutable values between renders and accessing DOM nodes.
 *
 * The file also highlights some core pitfalls:
 *   - useState updates trigger re-renders, so overusing state for heavy computations can hurt performance.
 *   - useEffect, while not directly causing re-renders, may trigger re-executions if dependencies are not managed correctly.
 *   - These re-render behaviors make useMemo and useCallback essential for preventing unnecessary recalculations
 *     and function recreations, respectively.
 */

/* -------------------------------------------------------------------------- */
/*                              1. useState                                   */
/* -------------------------------------------------------------------------- */
/**
 * useState is the primary hook for adding state to functional components.
 *
 * Need:
 *   - Functional components need a way to maintain and update state.
 *
 * Features:
 *   - Returns an array with the current state and a setter function.
 *   - Triggers a re-render when the state is updated.
 *
 * Uses:
 *   - Managing user input, toggling UI elements, controlling forms, etc.
 *
 * Pitfalls:
 *   - Every state update triggers a re-render. Overusing state for frequent or heavy computations may lead to performance issues.
 *   - Always use the setter to update state without mutating it directly.
 *
 * Example:
 */
import React, { useState } from 'react';

function Counter() {
  // Initialize count state with 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              2. useEffect                                  */
/* -------------------------------------------------------------------------- */
/**
 * useEffect is used to perform side effects in function components.
 *
 * Need:
 *   - Side effects such as data fetching, subscriptions, or manual DOM updates.
 *
 * Features:
 *   - Runs after the render phase.
 *   - Can clean up after itself (e.g., unsubscribe, clear timers) by returning a cleanup function.
 *   - Dependency arrays control when the effect runs.
 *
 * Uses:
 *   - API calls, event listeners, updating document titles, and more.
 *
 * Pitfalls:
 *   - Incorrect dependency management can lead to infinite loops or stale data.
 *   - While useEffect itself does not cause re-renders, its reliance on state changes may indirectly lead to frequent re-executions.
 *
 * Example:
 */
import React, { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when 'url' changes
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error:', error));

    // Optional cleanup if needed (e.g., aborting fetch)
    return () => {
      console.log('Cleanup on url change or component unmount');
    };
  }, [url]); // Only re-run effect if URL changes

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              3. useMemo                                    */
/* -------------------------------------------------------------------------- */
/**
 * useMemo memoizes an expensive calculation so that it’s only recomputed when its dependencies change.
 *
 * Need:
 *   - Optimize performance by preventing unnecessary recalculations on every render.
 *   - Particularly important because state changes (via useState/useEffect) trigger re-renders.
 *
 * Features:
 *   - Caches the result of a function call based on dependencies.
 *
 * Uses:
 *   - Expensive calculations, data processing, or sorting large arrays.
 *
 * Pitfalls:
 *   - Overuse or incorrect dependency management can lead to stale values or needless complexity.
 *
 * Example:
 */
import React, { useMemo } from 'react';

function ExpensiveComponent({ numbers }) {
  const total = useMemo(() => {
    console.log('Calculating total...');
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]); // Recalculate only if 'numbers' changes

  return (
    <div>
      <p>Total: {total}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              4. useCallback                                */
/* -------------------------------------------------------------------------- */
/**
 * useCallback returns a memoized version of a callback function.
 *
 * Need:
 *   - Prevent unnecessary re-creation of functions between renders.
 *   - Important when passing callbacks to child components that might otherwise re-render unnecessarily.
 *
 * Features:
 *   - Memoizes a function based on its dependency array.
 *
 * Uses:
 *   - Passing callbacks to optimized child components.
 *
 * Pitfalls:
 *   - Unnecessary use can add overhead; should only be used when there is a measurable performance benefit.
 *   - Incorrect dependency arrays can lead to stale closures.
 *
 * Example:
 */
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the increment function so it doesn't change unless necessary
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies mean it remains the same across renders

  return (
    <div>
      <p>Count: {count}</p>
      <ChildButton onIncrement={increment} />
    </div>
  );
}

function ChildButton({ onIncrement }) {
  console.log('ChildButton rendered');
  return (
    <button onClick={onIncrement}>
      Increment
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*                              5. useRef                                     */
/* -------------------------------------------------------------------------- */
/**
 * useRef returns a mutable ref object which persists for the lifetime of the component.
 *
 * Need:
 *   - Store mutable values that don’t require re-rendering when updated.
 *   - Directly access DOM elements.
 *
 * Features:
 *   - Provides a `.current` property to hold a value.
 *   - Updates to `.current` do not trigger a re-render.
 *
 * Uses:
 *   - Accessing DOM nodes (e.g., focusing an input).
 *   - Storing a mutable value like a timer ID.
 *
 * Pitfalls:
 *   - Overusing refs for state management can lead to unpredictable behavior.
 *
 * Example:
 */
import React, { useRef, useEffect } from 'react';

function TextInputWithFocus() {
  // Create a ref for the input element
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on mount"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Summary & Core Pitfalls                        */
/* -------------------------------------------------------------------------- */
/**
 * Core Pitfalls & Why Memoization is Needed:
 *   - useState: Every time state updates, it causes a re-render. This is great for UI updates but may be inefficient for frequent or heavy computations.
 *   - useEffect: Although it runs after render and doesn’t directly trigger re-renders, incorrect dependency handling can lead to frequent executions.
 *   - useMemo and useCallback: They help optimize performance by memoizing expensive calculations and function definitions, preventing unnecessary work during re-renders.
 *
 * Summary:
 *   - useState: Manages component state. Essential for user inputs and dynamic data.
 *   - useEffect: Manages side effects like data fetching, subscriptions, and manual DOM updates.
 *   - useMemo: Optimizes performance by caching expensive computations that would otherwise run on every re-render.
 *   - useCallback: Prevents unnecessary re-creations of functions, which helps avoid extra renders in child components.
 *   - useRef: Provides mutable references for DOM nodes and persistent values without triggering re-renders.
 *
 * Together, these hooks empower functional components with robust state management, side-effect handling, and performance optimizations.
 */
