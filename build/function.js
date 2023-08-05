"use strict";
function returnInputObj(input) {
    return { input };
}
// const returnInputObj1 = (input: string): TypeReturnInputObj => (return { input });
const returnInputObj1 = (input) => {
    return { input };
};
const getNumbers = (...numbers) => {
    return numbers;
};
function getUser(name, age) {
    return age ? `${name}, ${age}` : `${name}`;
}
console.log(getUser("John", 20));
//# sourceMappingURL=function.js.map