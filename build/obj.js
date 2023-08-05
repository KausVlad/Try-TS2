"use strict";
const user1 = {
    age: 20,
    name: "Kaus",
};
const hobby = {
    listHobby: ["gaming", "coding", "sleeping"],
    favoriteHobby: "gaming",
};
let userFull;
// eslint-disable-next-line prefer-const
userFull = {
    ...user1,
    ...hobby,
};
//# sourceMappingURL=obj.js.map