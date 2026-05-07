# `any` vs `unknown` in TypeScript - Why unknown is Safer

In TypeScript, `any` and `unknown` both allow a variable to hold any type of value. However, they are fundamentally different in terms of **type safety**. Understanding this difference is very important for writing reliable and maintainable code.

---

## 1. Why `any` is a Type Safety Hole

The `any` type acts as an escape hatch that completely disables TypeScript’s type checking. It tells the compiler: _“trust me, I know what I’m doing.”_

When you use `any`, you lose all benefits of TypeScript.

###  No Compile-Time Safety

You can call any method or access any property without errors, even if it doesn’t exist.

###  Runtime Risk

This can lead to runtime crashes because TypeScript does not validate the operations.

###  Loss of IntelliSense

Your IDE cannot provide proper autocompletion or type suggestions.

```ts
//  Dangerous 'any'
let any: any = "Hello World";

any.toUpperCase(); // OK in TypeScript

any = 42;

any.toUpperCase();
//  Compiles fine, but RUNTIME ERROR: .toUpperCase is not a function
```

## 2. Why `unknown` is the Safer Choice

The `unknown` type is a safer alternative introduced in TypeScript 3.0. It represents any value, just like `any`, but with one important difference: you cannot use it directly without checking its type first.

### Forced Type Safety

Unlike `any`, TypeScript does not allow you to perform operations on an `unknown` type without narrowing it.

###  Type Narrowing Required

You must check or assert the type before using the value.

###  Best for Unpredictable Data

Perfect for API responses, user inputs, or external data where the type is not known in advance.

```ts
// Safe 'unknown'
let dataUnknown: unknown = "Hello World";

// dataUnknown.toUpperCase();
//  Compile-time error: Object is of type 'unknown'

if (typeof dataUnknown === "string") {
  console.log(dataUnknown.toUpperCase()); //  Safe after narrowing
}
```
