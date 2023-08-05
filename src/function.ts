type TypeReturnInputObj = {
  input: string;
};

function returnInputObj(input: string): TypeReturnInputObj {
  return { input };
}

type TypeReturnInputObj1 = (input: string) => TypeReturnInputObj;

// const returnInputObj1 = (input: string): TypeReturnInputObj => (return { input });

const returnInputObj1: TypeReturnInputObj1 = (input) => {
  return { input };
};

const getNumbers = (...numbers: number[]) => {
  return numbers;
};

//! За допомогою OVERLOAD визначено різні варіанти параметрів та типів повернення для функції getUser. Перший overload-варіант приймає лише параметр name типу string і повертає рядок. Другий overload-варіант приймає параметри name типу string і age типу number і також повертає рядок. Виклик функції getUser("John", 20) буде відповідати другому overload-варіанту, оскільки передані обидва аргументи name і age. Функція поверне рядок "John, 20".
function getUser(name: string): string;
function getUser(name: string, age: number): string;
function getUser(name: string, age?: number): string {
  return age ? `${name}, ${age}` : `${name}`;
}

console.log(getUser("John", 20));
