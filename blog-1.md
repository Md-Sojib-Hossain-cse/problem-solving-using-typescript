# Pick & Omit Utility Types in TypeScript

In Typescript `Pick` and `Omit` are two utility types those keeps our code DRY. Those allows us to derived specific types from a Master type without manually re declaring.

## How They Prevent Duplication?

Instead of rewriting shared properties across multiple types those are creates slices of master interface at the type level.

---

## Pick

`Pick` constructs a new type by selecting some specific properties from an existing one.

For example there have a type named `Person`, that contains `id`, `name` and `age`. In information table we wanna just see `name` and `age`.

````ts
interface Person {
  id: number;
  name: string;
  age: number;
}

type PersonInfo = Pick<Person, "name" | "age">;


## Omit

`Omit` constructs a new type by removing some specific properties from an existing one.

For example there have a type named `User`, that contains `id`, `name` and `password`. We don't wan't to send password to the response.

```ts
interface User {
  id: number;
  name: string;
  password: string;
}

type SafeUser = Omit<User, "password">;
````
