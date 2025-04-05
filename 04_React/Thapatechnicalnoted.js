/**
 * notes.js
 *
 * Notes on various React topics with code examples.
 *
 * 1. Controlled vs Uncontrolled Components
 * --------------------------------------------------
 * Explanation:
 * - Controlled Components: Form inputs whose values are managed by React state.
 *   Use Cases: Instant form validation, centralized state management.
 * - Uncontrolled Components: Form inputs managed by the DOM.
 *   Use Cases: Simpler forms or integration with non-React libraries.
 *
 * Code Example:
 */
// Controlled Component Example
function ControlledForm() {
    const [value, setValue] = React.useState('');
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
  
  // Uncontrolled Component Example
  function UncontrolledForm() {
    const inputRef = React.useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(inputRef.current.value);
    };
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  /**
   * 2. useRef
   * --------------------------------------------------
   * Explanation:
   * useRef returns a mutable ref object whose .current property holds the value.
   * Use Cases: Accessing DOM elements, storing mutable values without causing re-renders.
   *
   * Code Example:
   */
  function FocusInput() {
    const inputRef = React.useRef(null);
    React.useEffect(() => {
      inputRef.current.focus();
    }, []);
    return <input ref={inputRef} type="text" />;
  }
  
  /**
   * 3. forwardRef vs props.ref
   * --------------------------------------------------
   * Explanation:
   * - forwardRef allows a parent component to pass a ref to a child component.
   * - The "ref" prop is reserved and cannot be passed as a normal prop.
   *
   * Code Example:
   */
  const FancyInput = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} />
  ));
  
  function ParentComponent() {
    const inputRef = React.useRef();
    return (
      <div>
        <FancyInput ref={inputRef} placeholder="Focus me" />
        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
      </div>
    );
  }
  
  /**
   * 4. Fetch API Data Without Infinite Loop (useEffect & useState)
   * --------------------------------------------------
   * Explanation:
   * - Always include a proper dependency array in useEffect.
   * - Avoid re-running the effect unless needed.
   *
   * Code Example:
   */
  function DataFetcher() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      }
      fetchData();
    }, []); // Empty array ensures the effect runs only once
    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
  }
  
  /**
   * 5. useId: Labeling vs. Keying
   * --------------------------------------------------
   * Explanation:
   * - useId generates unique IDs useful for labeling form elements (e.g., linking a label with an input).
   * - Caution: Do NOT use useId as keys in list rendering (keys must be stable and unique).
   *
   * Code Example:
   */
  function LabeledInput() {
    const id = React.useId();
    return (
      <div>
        <label htmlFor={id}>Name:</label>
        <input id={id} type="text" />
      </div>
    );
  }
  
  /**
   * 6. Memoization: useMemo vs React.memo vs useCallback and New React 19 Feature
   * --------------------------------------------------
   * Explanation:
   * - useMemo: Caches computed values to avoid expensive recalculations.
   * - React.memo: Higher Order Component that memoizes functional components using shallow prop comparisons.
   * - useCallback: Memoizes functions to prevent unnecessary re-creations.
   * - React 19: Introduces a new advanced memoization hook (e.g., useDeferredMemo) that handles deep object comparisons.
   *
   * Code Example:
   */
  // useMemo Example
  function ExpensiveComponent({ num }) {
    const computed = React.useMemo(() => expensiveCalculation(num), [num]);
    return <div>{computed}</div>;
  }
  
  // React.memo Example
  const MemoizedComponent = React.memo(function MyComponent({ prop }) {
    return <div>{prop}</div>;
  });
  
  // useCallback Example
  function CallbackComponent({ onClick }) {
    const handleClick = React.useCallback(() => {
      onClick();
    }, [onClick]);
    return <button onClick={handleClick}>Click</button>;
  }
  
  // New React 19 Advanced Memoization Example (hypothetical hook)
  function DeepMemoizedComponent({ complexObj }) {
    // useDeferredMemo is new in React 19 for better deep memoization
    const memoizedValue = React.useDeferredMemo(() => processComplexObject(complexObj), [complexObj]);
    return <div>{memoizedValue}</div>;
  }
  
  /**
   * 7. AppLayout and Outlet with Child Routes
   * --------------------------------------------------
   * Explanation:
   * - AppLayout: A layout wrapper that contains common UI elements (e.g., header, footer).
   * - Outlet: Renders nested child routes defined in React Router.
   *
   * Code Example:
   */
  import { Outlet, Link } from 'react-router-dom';
  
  function AppLayout({children}) {
    return (
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>Footer content</footer>
      </div>
    );
  }
  
  /**
   * 8. isActive from React Router
   * --------------------------------------------------
   * Explanation:
   * - isActive is used (via NavLink) to conditionally style active links.
   *
   * Code Example:
   */
  import { NavLink } from 'react-router-dom';
  
  function Navigation() {
    return (
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
      </nav>
    );
  }
  
  /**
   * 9. Error Page and useRouteError
   * --------------------------------------------------
   * Explanation:
   * - useRouteError is used to catch errors thrown in route components.
   *
   * Code Example:
   */
  import { useRouteError } from 'react-router-dom';
  
  function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
      </div>
    );
  }
  
  /**
   * 10. Fetching Data Using Loaders with Custom Hooks
   * --------------------------------------------------
   * Explanation:
   * - Loaders in React Router pre-fetch data before rendering a route.
   * - Custom hooks (like useLoaderData) encapsulate this logic.
   *
   * Code Example:
   */
  import { useLoaderData } from 'react-router-dom';
  
  function DataDisplay() {
    const data = useLoaderData();
    return <div>{JSON.stringify(data)}</div>;
  }
  
  // Example Route Loader (to be defined in your router configuration)
  /*
  {
    path: "/data",
    element: <DataDisplay />,
    loader: async () => {
      const response = await fetch('https://api.example.com/data');
      return response.json();
    }
  }
  */
  
  /**
   * 11. useNavigation and Loading Page on AppLayout
   * --------------------------------------------------
   * Explanation:
   * - useNavigation provides the current navigation state (e.g., 'loading', 'idle').
   * - Use Cases: Displaying global loading indicators during route transitions.
   *
   * Code Example:
   */
  import { useNavigation } from 'react-router-dom';
  
  function AppLayoutWithLoading() {
    const navigation = useNavigation();
    return (
      <div>
        <header>Header</header>
        {navigation.state === 'loading' && <div className="loading">Loading...</div>}
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
  
  /**
   * 12. Dynamic Routing with useParams and Params Props
   * --------------------------------------------------
   * Explanation:
   * - useParams extracts URL parameters for dynamic routing.
   * - Alternatively, route props may provide params.
   *
   * Code Example:
   */
  import { useParams } from 'react-router-dom';
  
  function UserProfile() {
    const { userId } = useParams();
    return <div>User Profile for ID: {userId}</div>;
  }
  
  // Alternatively, using route props (if configured)
  // function UserProfileProps({ params }) {
  //   return <div>User Profile for ID: {params.userId}</div>;
  // }
  
  /**
   * 13. Axios Library
   * --------------------------------------------------
   * Explanation:
   * - Axios is a promise-based HTTP client for making API calls.
   * - Offers a cleaner API compared to fetch, with automatic JSON conversion and error handling.
   *
   * Code Example:
   */
  import axios from 'axios';
  
  function getData() {
    axios.get('https://api.example.com/data')
      .then(response => console.log(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Using async/await
  async function fetchData() {
    try {
      const { data } = await axios.get('https://api.example.com/data');
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  /**
 * 14. useEffect Cleanup Function
 * --------------------------------------------------
 * Explanation:
 * - The cleanup function in useEffect is used to clear side effects such as subscriptions, timers,
 *   or event listeners when the component unmounts or before the effect re-runs.
 * - Prevents memory leaks and ensures that stale data or event handlers are properly removed.
 *
 * Code Example:
 */
function TimerComponent() {
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
  
      // Cleanup function to clear the timer on component unmount
      return () => {
        clearInterval(timer);
      };
    }, []); // Empty dependency array: effect runs once on mount
  
    return <div>Count: {count}</div>;
  }
  