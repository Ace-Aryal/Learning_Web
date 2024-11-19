// Ternary Operator vs. && Operator in React

// Ternary Operator:
// Use for two outcomes (true and false cases).
// Syntax: condition ? <TrueComponent /> : <FalseComponent />
const isLoggedIn = true;
const ternaryExample = isLoggedIn ? <WelcomeMessage /> : <LoginButton />;

// && Operator:
// Use for single-condition rendering (only true case).
// Syntax: condition && <Component />
const andExample = isLoggedIn && <WelcomeMessage />;

// Why use && instead of ternary with null?
// - Cleaner and more readable.
// - Avoids explicitly writing `null`.
// Example:
// Ternary: condition ? <Component /> : null
// AND: condition && <Component />