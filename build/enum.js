"use strict";
// Enum в TypeScript - це спеціальний тип даних, який дозволяє визначити набір іменованих значень (часто відомі як "members" або "enumerators"). Кожне значення в enum має ім'я та цілочисельну вартість, яка може бути автоматично призначена або встановлена вручну.
var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["USER"] = 1] = "USER";
    EnumRoles[EnumRoles["GUEST"] = 2] = "GUEST";
})(EnumRoles || (EnumRoles = {}));
const user3 = {
    role: EnumRoles.USER,
    color: 2 /* EnumColor.BLUE */,
};
console.log(user3.color);
console.log(EnumRoles[EnumRoles.ADMIN]); // reverse mapping
//# sourceMappingURL=enum.js.map