"use strict";
function gen1(args) {
    return args;
}
gen1("hello");
const gen2 = (args) => {
    return args;
};
gen2("hello");
class Gen1 {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const genValue = new Gen1("hello");
const pair = {
    key: 1,
    value: "hello",
};
function gerGenLength(arg) {
    return arg.length;
}
console.log(gerGenLength([1, 2, 3]));
//# sourceMappingURL=generic.js.map