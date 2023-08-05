// Enum в TypeScript - це спеціальний тип даних, який дозволяє визначити набір іменованих значень (часто відомі як "members" або "enumerators"). Кожне значення в enum має ім'я та цілочисельну вартість, яка може бути автоматично призначена або встановлена вручну.

enum EnumRoles {
  ADMIN,
  USER,
  GUEST,
}

const enum EnumColor {
  RED,
  GREEN,
  BLUE,
}

interface IUser3 {
  role: EnumRoles;
  color: EnumColor;
}

const user3: IUser3 = {
  role: EnumRoles.USER,
  color: EnumColor.BLUE,
};

console.log(user3.color);
console.log(EnumRoles[EnumRoles.ADMIN]); // reverse mapping
