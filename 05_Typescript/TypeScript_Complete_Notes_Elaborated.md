
# 📘 TypeScript - Complete Guide & Notes  
> Based on "Learn TypeScript - Full Tutorial" by Hitesh Choudhary (freeCodeCamp)  
> 🧠 Expanded with real-world examples and edge case insights by ChatGPT

---

## 🧠 What is TypeScript?

- A superset of JavaScript that adds **static typing**, **OOP features**, and **type safety**.
- TypeScript code is transpiled into plain JavaScript, so it runs anywhere JS runs.

### ✅ Why TypeScript?
| Feature | Benefit |
|--------|---------|
| Static Typing | Prevents bugs before runtime |
| Better IDE Support | IntelliSense, autocomplete, go to definition |
| Self-documenting Code | Types explain what your code expects |
| Large-scale Readability | Easier to collaborate and maintain |

---

## ⚙️ TypeScript Setup

```bash
npm install -g typescript
tsc --init               # creates tsconfig.json
tsc file.ts              # compiles file
tsc --watch              # watches files for changes
```

### Example tsconfig.json:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## 🔹 Primitive Types

```ts
let age: number = 25;
let userName: string = "Dipesh";
let isOnline: boolean = true;
let anything: any = "could be anything";
```

- **`any`** turns off type-checking. Avoid unless necessary.
- **Use Case for `any`:** Third-party libraries without types.

---

## 🔸 Special Types

```ts
let value: unknown;
value = "test";
// value.toUpperCase(); // ❌ Error
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ OK
}

function log(msg: string): void {
  console.log(msg);
}

function crash(): never {
  throw new Error("App crashed!");
}
```

- Use `never` for unreachable or always-failing functions.
- Use `unknown` instead of `any` when unsure of the type.

---

## 📦 Arrays & Tuples

```ts
let scores: number[] = [90, 85, 100];
let users: string[] = ["John", "Jane"];

let person: [string, number] = ["Alice", 28];
```

- Tuples are great for structured but ordered data.

---

## 🔁 Union & Literal Types

```ts
let id: number | string;
id = 123;
id = "abc";

type Theme = "dark" | "light";
let userTheme: Theme = "dark";
```

- Useful for restricting values (e.g., "open" | "closed")

---

## 🧱 Type Aliases & Interfaces

```ts
type User = {
  id: number;
  name: string;
  isActive?: boolean;
};

interface Post {
  title: string;
  body: string;
  tags?: string[];
}

interface BlogPost extends Post {
  published: boolean;
}
```

- **Type** is more flexible (can use unions).
- **Interface** is great for object structures and is extendable.

---

## 🧰 Functions

```ts
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

const sum = (a: number, b: number): number => a + b;
```

### Edge Case:
```ts
function printInfo(data: string | string[]) {
  if (Array.isArray(data)) {
    console.log(data.join(", "));
  } else {
    console.log(data);
  }
}
```

---

## 🎛️ Objects

```ts
const config: {
  appName: string;
  version: number;
  debug?: boolean;
} = {
  appName: "MyApp",
  version: 1.0,
};
```

---

## 📋 Enums

```ts
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED",
}

const taskStatus: Status = Status.Pending;
```

---

## 🧪 Type Narrowing

```ts
function handleInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toFixed(2);
}
```

### Also use:
- `typeof`
- `instanceof`
- `in`

---

## ⚖️ Type Assertion

```ts
let someValue: any = "TypeScript";
let len: number = (someValue as string).length;
```

- Also: `<string>someValue`

---

## 🚀 Classes & OOP

```ts
class Person {
  constructor(private id: number, public name: string) {}

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const dev = new Person(1, "Dipesh");
console.log(dev.greet());
```

- **private**, **public**, **protected** for access control.

---

## 🔧 Generics

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(5);
const word = identity<string>("hello");
```

### Generic Constraint
```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

---

## 🚦 Discriminated Unions

```ts
type Vehicle =
  | { type: "car"; wheels: number }
  | { type: "bike"; pedals: boolean };

function move(v: Vehicle) {
  if (v.type === "car") {
    console.log(`Moving with ${v.wheels} wheels`);
  } else {
    console.log("Pedaling the bike");
  }
}
```

- `never` helps ensure **exhaustiveness** in switch statements.

---

## 📁 Modules

Split code across files:

```ts
// user.ts
export interface User {
  id: number;
  name: string;
}

// index.ts
import { User } from "./user";
```

---

## 🛡️ Best Practices

- ✅ Always enable `"strict": true` in tsconfig.
- 🔍 Avoid `any`, prefer `unknown` if unsure.
- 📄 Type objects with `interface`, unions with `type`.
- 🧪 Use generics for reusable functions/components.
- 📦 Use `readonly` for immutable fields.

---

## 🚀 Real-World Example: API Response Type

```ts
type ApiResponse<T> = {
  data: T;
  error?: string;
};

const fetchUser = (): ApiResponse<User> => {
  return {
    data: { id: 1, name: "Dipesh" },
  };
};
```

---

## 🔚 Final Thoughts

- TypeScript adds power to JavaScript without changing its core.
- It's your ally in building scalable and maintainable codebases.
- Learn by doing: Convert a React or Node.js app to TypeScript!

---

> 🌱 Keep building. Break things. Learn deeply. Happy coding!
