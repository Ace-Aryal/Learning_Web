// ===================================================
// 📘 TypeScript Core Concepts with Use-Cases & Examples
// ===================================================

// ======================================
// 🔹 1. PRIMITIVE TYPES (Stored in Stack)
// ======================================

// Number
let num: number = 12;

// String
let message: string = "Hello, TypeScript";

// Boolean
let isLoggedIn: boolean = false;

// Null & Undefined
let nothing: null = null;
let notAssigned: undefined = undefined;

// Symbol (used for unique identifiers, advanced use case)
let sym: symbol = Symbol("unique");

// BigInt (for large integers)
let bigNum: bigint = 123456789012345678901234567890n;

// Note: Primitives are immutable and stored in stack

// =======================================
// 🔸 Why avoid `any`?
// =======================================

let dangerous: any = "hello";
dangerous = 10;        // No error
dangerous.toFixed();   // No intellisense or safety
// ❌ Avoid `any` – defeats purpose of TypeScript

// Instead:
let safe: number; // ✅ safe and clear type

// =======================================
// 🔹 2. REFERENCE TYPES (Stored in Heap)
// =======================================

// Arrays
let scores: number[] = [98, 85, 76];
let names: string[] = ["Ram", "Shyam"];

// Tuples – fixed length, fixed type position
let person: [string, number] = ["Alice", 25];
console.log(person[0]); // Alice
person.push("extra"); // ⚠️ Still allows push (runtime flexibility)

// Objects
let user: {
    id: number;
    name: string;
    isAdmin?: boolean; // Optional field
} = {
    id: 1,
    name: "Dipesh"
};

// =======================================
// 🔹 3. SPECIAL TYPES
// =======================================

// ✅ UNKNOWN (safe alternative to `any`)
let inputData: unknown;
inputData = 5;
inputData = "data";
if (typeof inputData === "string") {
    console.log(inputData.toUpperCase());
}

// ✅ VOID – for functions that don’t return anything
function logMessage(): void {
    console.log("Hello!");
}

// ✅ NEVER – function that never returns
function throwError(msg: string): never {
    throw new Error(msg);
}
function runInfinite(): never {
    while (true) {
        console.log("Running forever...");
    }
}
// | Function        | Why `never`?                  | Behavior                      |
// | --------------- | ----------------------------- | ----------------------------- |
// | `throwError()`  | Immediately throws an error   | Execution stops via exception |
// | `runInfinite()` | Infinite loop, no return ever | Execution never completes     |

// =======================================
// 🔹 4. ENUMS – Named constants
// =======================================

enum Role {
    ADMIN = "admin",
    TEACHER = "teacher",
    STUDENT = "student"
}
const myRole: Role = Role.ADMIN;

enum Direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}
console.log(Direction.LEFT); // 3
console.log(Direction[3]);   // LEFT

// =======================================
// 🔹 MEMORY MODEL (Stack vs Heap)
// =======================================

// Stack: number, string, boolean, null, undefined (Primitive)
// Heap: object, array, function, class, tuple (Reference)

// Primitive → Copied by value
let x = 10;
let y = x; // x & y are independent

// Reference → Copied by reference
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] – changed!

// =======================================
// 🔹 5. TYPE SYSTEM CONCEPTS
// =======================================

// Literal Types
let status: "success" | "failure";
status = "success"; // ✅
// status = "pending"; // ❌ not allowed

// Union Types (like Set Union)
type ID = number | string;
function printID(id: ID) {
    if (typeof id === "string") console.log(id.toUpperCase());
    else console.log(id.toFixed(2));
}

// Intersection Types (like Set Intersection)
type Classmates = { section: string };
type Students = { name: string };
type ClassmatesInStudents = Classmates & Students;
const student: ClassmatesInStudents = {
    name: "Dipesh",
    section: "M17"
};
// If same key exists in both: must be same type or TS throws error

// =======================================
// 🔹 6. TYPE ALIASES & INTERFACES
// =======================================

// Type Alias
// Like user-defined types in C

type Age = number;
let myAge: Age = 19;


type Human = {
    name: string;
    age: number;
    email: string;
};
let human: Human = {
    name: "Ace",
    age: 19,
    email: "aryaldeelep2025@gmail.com"
};
// Can't add extra properties unless explicitly allowed

// Interface
// Preferred when extending or implementing classes

interface User {
    name: string;
    username: string;
    age: number;
    email: string;
    password: string;
}

function getUser(user: User) {
    console.log(user.age);
}

// Key differences:
// 1. Interface allows declaration merging
interface Human {
    name: string;
}
interface Human {
    age: number;
}
// Now has both name & age

// 2. Inheritance via `extends`
interface Food {
    name: string;
    price: number;
}
interface SweetFood extends Food {
    verySweet: boolean;
}
function getMithai(mithai: SweetFood) {
    console.log(mithai.name, mithai.verySweet);
}
//3. equal  sign

// =======================================
// 🔹 7. CLASSES IN TS
// =======================================

class Smartphone {
    price = 100000;
    image = "images/iphone";
    color = "navy";

    playMusic = () => console.log("play music");
    switchMode(mode: string) {
        console.log(mode);
    }
}

class Keyboard {
    color = "white";
    lights = "RGB";
    keys = 103;
    backlit = false;

    pressDown() {
        console.log("pressed");
    }
    keyUp() {
        console.log("key up");
    }
    turnOffLights(name: string) {
        console.log(`turn off light ${name}`);
    }
}

let myKeyboard = new Keyboard();
myKeyboard.turnOffLights("bajealKeyboard");

// =======================================
// 🔹 8. INHERITANCE, CONSTRUCTORS & ACCESS MODIFIERS
// =======================================

class Food {
    price = 1200;
    eat() {
        console.log("eating");
    }
}
class Mithai extends Food {
    name = "Mithai";
}
let mithai1 = new Mithai();
mithai1.eat();

// Constructor Shorthand
class Pendrive {
    // company :string or public company : string
    constructor(public company: string) { }
}

// Access Modifiers
// public (default), private, protected
class UserWithBalance {
    private balance = 1200;
    getBalance() {
        console.log(this.balance);
    }
    setBalance(newAmount: number) {
        this.balance = newAmount;
    }
}
const u = new UserWithBalance();
// u.balance = 200 // ❌ Error

class VIPUser extends UserWithBalance {
    // protected balance = 1200 would be accessible in child
}

// Readonly
class ConstProp {
    constructor(public readonly name: string) { }
}
const cp = new ConstProp("Dipesh");
// cp.name = "New" // ❌ Error

// Getter/Setter pattern
class Account {
    constructor(private _username: string) { }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }
}
const acc = new Account("harsh");
console.log(acc.username); // calls getter 
acc.username = "Dipesh"; // calls setter

// =======================================
// 🔹 9. FUNCTIONS
// =======================================

// Named Function
function greet(): void {
    console.log("Hi");
}

// Anonymous Function
const sum = function (a: number, b: number): number {
    return a + b;
};

// Arrow Function
const sayHi = (): void => console.log("Hi");

// Explicit return type
function fullName(name: string, age: number): string {
    return name + " " + age.toString();
}

// Implicit return type
function concat(name: string, age: number) {
    return name + age; // Inferred as string
}

// Optional Params
function userProfile(name: string, age: number, gender?: string) { }

// Default Params
function welcome(name: string = "Guest") {
    console.log("Welcome", name);
}

// Rest Params
function listNames(...names: string[]) {
    console.log(names); // ["Harsh","Dipesh"]
}
listNames("Harsh", "Dipesh");

// =======================================
// 📝 Summary Cheatsheet
// =======================================
// ✅ Primitives: number, string, boolean, null, undefined, symbol, bigint
// ✅ Reference: object, array, tuple, function, class
// ✅ Special: any (avoid), unknown, void, never, enum
// ✅ Types: union, intersection, literal
// ✅ Functions: named, anonymous, arrow, optional/default/rest
// ✅ OOP: class, constructor, inheritance, encapsulation, access modifiers
