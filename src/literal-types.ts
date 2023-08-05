type TypeIsNumber<T> = T extends number ? true : false;

type Type1 = TypeIsNumber<string>; // true
type Type2 = TypeIsNumber<number>; // false

type TypeFruit = "apple" | "banana" | "orange";
type TypeFruitCost = 10 | 20 | 30;
type TypeFood = `${TypeFruit} ${TypeFruitCost} UAH per kg`;
const typeFood: TypeFood = "apple 10 UAH per kg";
