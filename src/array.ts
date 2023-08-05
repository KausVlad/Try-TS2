let array: string[];
//! let array1: Array<string>; // old way of declaring an array

array = ["1", "2", "3", "4"];

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]; //!This code snippet declares a constant variable numbers that is an array of numbers. The ReadonlyArray type indicates that the array cannot be modified after it is initialized. The array contains the numbers 1, 2, 3, 4, and 5.

type TypeArray = [number, string, boolean]; //!Кортеж - це тип даних, який може містити кілька значень різних типів, визначених у певному порядку. У даному коді "TypeArray" визначає кортеж з трьох елементів, типи яких є number, string і boolean. Кортежі використовуються для представлення групи значень, які мають фіксований порядок і можуть бути доступні за індексом.

const newArray: TypeArray = [1, "2", true];
