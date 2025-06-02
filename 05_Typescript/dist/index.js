"use strict";
let myStr;
let anotherStr = "another";
// ======================================
// 🔹 1. PRIMITIVE TYPES (Stored in Stack)
// ======================================
// Number
let num = 99;
let Names = {};
// String
let message = "Hello, TypeScript";
// Boolean
let isLoggedIn = false;
// Null & Undefined
let nothing = null;
let notAssigned = undefined;
// Symbol (used for unique identifiers, advanced use case)
let sym = Symbol("unique");
// BigInt (for large integers)
// let bigNum: bigint = 123456789012345678901234567890n;
// Note: Primitives are immutable and stored in stack
// =======================================
// 🔸 Why avoid `any`?
// =======================================
let dangerous = "hello";
dangerous = 10; // No error
dangerous.toFixed(); // No intellisense or safety
// ❌ Avoid `any` – defeats purpose of TypeScript
// Instead:
let safe; // ✅ safe and clear type
// =======================================
// 🔹 2. REFERENCE TYPES (Stored in Heap)
// =======================================
// Arrays
let scores = [98, 85, 76];
let names = ["Ram", "Shyam"];
// Tuples – fixed length, fixed type position
let person = ["Alice", 25];
// ✅ Access by index
console.log(person[0]); // Alice
// ⚠️ Gotcha: Still allows push!
person.push("extra"); // No compile error, but breaks fixed structure
// Objects
let user = {
    id: 1,
    name: "Dipesh"
};
// =======================================
// 🔹 3. SPECIAL TYPES
// =======================================
// ✅ UNKNOWN (safe alternative to `any`)
let inputData;
inputData = 5;
inputData = "data";
// Need type check before usage
if (typeof inputData === "string") {
    console.log(inputData.toUpperCase());
}
// ✅ VOID – for functions that don’t return anything
function logMessage() {
    console.log("Hello!");
}
// ✅ NEVER – function that never returns
function throwError(msg) {
    throw new Error(msg);
}
function runInfinite() {
    while (true) {
        console.log("Running forever...");
    }
}
// =======================================
// 🔹 4. ENUMS – Named constants
// =======================================
// Group related values (like roles, positions)
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["TEACHER"] = "teacher";
    Role["STUDENT"] = "student";
})(Role || (Role = {}));
const myRole = Role.ADMIN;
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
var classes;
(function (classes) {
    classes["LKG"] = "lkg";
    classes["UKG"] = "ukg";
})(classes || (classes = {}));
const myClass = classes.LKG; // we can't assig like = "lkg"
console.log(Direction.LEFT); // 3
console.log(Direction[3]); // LEFT
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
// 📝 Summary Cheatsheet
// =======================================
// ✅ Primitives: number, string, boolean, null, undefined, symbol, bigint
// ✅ Reference: object, array, tuple, function, class
// ✅ Special: any (avoid), unknown, void, never, enum
// Enums confusion
// Great question, Dipesh. Let's **break down** this line:
// ```ts
// const myRole: Role = Role.ADMIN;
// ```
// This uses a **TypeScript `enum`**, and it’s assigning a **specific enum value** to a variable. Here's the step-by-step explanation:
// ---
// ### 🔸 1. What is an `enum`?
// An `enum` (short for *enumeration*) is a way to define a **named set of constant values**. Think of it like a categorized list you can use to make your code **more readable and maintainable**.
// Here’s the full enum from earlier:
// ```ts
// enum Role {
//   ADMIN = "admin",
//   TEACHER = "teacher",
//   STUDENT = "student"
// }
// ```
// This `Role` enum defines three possible roles, each with a string value.
// ---
// ### 🔸 2. `const myRole: Role`
// This declares a constant variable `myRole`, and its **type is limited to the `Role` enum**. That means you can only assign values from the `Role` enum to it — not any random string.
// It’s like saying:
// > “Hey TypeScript, `myRole` must be one of the `Role` enum values.”
// ---
// ### 🔸 3. `= Role.ADMIN`
// This assigns the value `"admin"` to `myRole`, **but only through the enum**. So:
// ```ts
// Role.ADMIN // is "admin"
// ```
// You could also do:
// ```ts
// myRole = Role.TEACHER; // ✅ ok
// myRole = "teacher";     // ❌ Error: must be Role.TEACHER
// ```
// Why? Because `"teacher"` is just a string, not a **typed enum value**.
// ---
// ### 🔸 Final Breakdown
// ```ts
// const myRole: Role = Role.ADMIN;
// ```
// | Part           | Meaning                                                   |
// | -------------- | --------------------------------------------------------- |
// | `const myRole` | Declares a constant variable                              |
// | `: Role`       | Type annotation: must be one of the `Role` enum values    |
// | `= Role.ADMIN` | Assigns the specific enum value `"admin"` to the variable |
// ---
// ### ✅ Benefit of Using Enums
// * **Autocomplete & IntelliSense** support
// * Prevents typos (e.g., `"Adminn"` vs `Role.ADMIN`)
// * Centralized and readable role definitions
// ---
