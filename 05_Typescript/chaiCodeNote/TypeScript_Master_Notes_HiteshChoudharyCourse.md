
# 📘 TypeScript Master Notes (Based on Hitesh Choudhary's FreeCodeCamp Course)

> Everything you need to know about TypeScript from beginner to intermediate level with edge cases, examples, use cases, and explanations.

---

## 🧠 Core TypeScript Concepts

### 🔸 `any` Type
- Tells TypeScript to opt-out of type checking.
- Dangerous in production. Avoid unless necessary.
```ts
let data: any = 5;
data = "string"; // No error
```

---

### 🔸 Type Inference & `noImplicitAny`
- TypeScript can infer types automatically:
```ts
let num = 5; // inferred as number
```
- Enable `noImplicitAny` in `tsconfig.json` for stricter checking.

---

### 🔸 Functions & Object Weirdness
```ts
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}
```
OR
```ts
function createUser(): { name: string; isPaid: boolean } {
  return { name: "John", isPaid: true };
}
```

**Weird Behavior:**
```ts
createUser({ name: "John", isPaid: false, email: "john@example.com" }); // Error
let user = { name: "John", isPaid: false, email: "john@example.com" };
createUser(user); // ✅ No error!
```

---

## 🏷️ Type Aliases
```ts
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}
```

---

## 🧷 Readonly & Optional Properties
```ts
type User = {
  readonly _id: string;
  name: string;
  email?: string; // optional
};

let myUser: User = { _id: "1", name: "Dipesh" };
myUser._id = "2"; // ❌ Error
```

---

## ⚔️ Intersection Types
```ts
type CardNumber = { cardNumber: string };
type CardDate = { cardDate: string };
type CardDetails = CardNumber & CardDate & { cvv: number };
```

---

## 📚 Arrays
```ts
const heroes: string[] = [];
const heroPowers: Array<number> = [];

type User = { name: string; isActive: boolean };
const allUsers: User[] = [];

const matrix: number[][] = [
  [255, 255, 255],
  [128, 128, 128],
];
```

---

## 🔀 Union Types
```ts
let score: number | string = 33;
score = "thirty";

type User = { name: string; id: number };
type Admin = { username: string; id: number };

let person: User | Admin = { name: "Hitesh", id: 1 };
```

---

## 📌 Literal Types
```ts
type Seat = "window" | "middle" | "aisle";
let seat: Seat = "crew"; // ❌ Error
```

---

## 🧩 Tuples
```ts
let tUser: [string, number, boolean] = ["hc", 131, true];

type User = [number, string];
const newUser: User = [112, "example.com"];
newUser.push("new item"); // Allowed (quirk of JS)
```

---

## 🪑 Enums
```ts
enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
}
let mySeat = SeatChoice.AISLE;
```

---

## 📐 Interfaces
```ts
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}
```

**Object Implementation:**
```ts
const user: User = {
  dbId: 22,
  email: "email",
  userId: 221,
  startTrial: () => "started",
  getCoupon: (coupon) => 10,
};
```

---

## 🧬 Interface vs Type
- Both can be extended.
- Interfaces are better for **OOP-like** structure and merging.

```ts
interface A {
  name: string;
}
interface B extends A {
  age: number;
}
```

---

## 🎓 Classes

### Readonly
```ts
class User {
  readonly city: string = "Kathmandu";
}
```

### Getters & Setters
```ts
class User {
  private _courseCount = 1;

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) throw new Error("Invalid");
    this._courseCount = courseNum;
  }
}
```

- Getter must return.
- Setter must not return anything.
- Prefix `_` used for private fields.

---

### Access Modifiers & Inheritance

```ts
class Base {
  private secret = "shhh";
  protected password = "123";

  reveal() {
    return this.password;
  }
}

class Derived extends Base {
  getPassword() {
    return this.password; // ✅ accessible
  }
}
```

---

## 📱 Interface Use Case (Mobile App)

```ts
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {}
}
```

---

## 🧰 Abstract Classes

```ts
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

class Insta extends TakePhoto {
  constructor(cameraMode: string, filter: string, public burst: number) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }
}
```

---

## 🧬 Generics

### Problem:
```ts
function identity(val: any): any {
  return val;
}
```

### Solution:
```ts
function identity<T>(val: T): T {
  return val;
}
```

**Generic with Interface**
```ts
interface Bottle {
  brand: string;
  type: number;
}
identity<Bottle>({ brand: "Pepsi", type: 2 });
```

**Generic with Arrays**
```ts
function getSearchProducts<T>(products: T[]): T {
  return products[0];
}
```

---

## 🔍 Type Narrowing

### `in` Keyword
```ts
function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) return account.isAdmin;
}
```

### `instanceof`
```ts
function logValue(x: Date | string): string {
  return x instanceof Date ? x.toUTCString() : x.toUpperCase();
}
```

---

## 🐠 Discriminated Unions

```ts
interface Fish {
  type: "fish";
  swim: () => void;
}

interface Bird {
  type: "bird";
  fly: () => void;
}

type Pet = Fish | Bird;

function move(animal: Pet) {
  if (animal.type === "fish") {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

---

## ✅ Final Words

TypeScript is all about:
- Type safety
- Developer productivity
- Writing clean, scalable code

Master it with real-world use cases like:
- Form validation
- API typing
- Redux store typing
- Props/interfaces in components

---

🎯 **Recommended Practice**: Build a project like a blogging app or school management dashboard using TypeScript with React, enforce all interface & type rules.

