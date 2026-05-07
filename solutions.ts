//solution 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const result = numbers.filter((number) => number % 2 === 0);
  return result;
};

//solution 2
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

//solution 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  const result = typeof input === "string" ? "String" : "Number";

  return result;
};

//solution 4

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

//solution 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book): Book & { isRead: boolean } => {
  return {
    ...obj,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

//solution 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

//solution 7
const getIntersection = (input1: number[], input2: number[]): number[] => {
  const newArr: number[] = [];

  const result = input1.reduce(
    (table, number) => {
      table[number] = number;
      return table;
    },
    {} as Record<number, number>,
  );

  input2.forEach((number) => {
    if (result[number]) {
      newArr.push(number);
    }
  });

  return newArr;
};
