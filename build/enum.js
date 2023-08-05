"use strict";
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
//# sourceMappingURL=enum.js.map