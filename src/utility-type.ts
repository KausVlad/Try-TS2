interface IPerson {
  id: number;
  name: string;
  age: number;
  birthday: string;
}

interface IPerson1 extends Omit<IPerson, "id"> {} // залишає всі елементи крім обраного
interface IPersonID extends Pick<IPerson, "id"> {} // залишає тільки обраний
interface IPersonOptional extends Partial<IPerson> {} // робить всі елементи опціональним
interface IPersonRequire extends Required<IPerson> {} // всі поля обов'язкові
interface IPersonReadOnly extends Readonly<IPerson> {} // блокує перезапис

const person1: IPerson1 = { age: 20, name: "John", birthday: "01.01.1990" };
const person2: IPersonID = { id: 1 };
const person3: IPersonOptional = { birthday: "01.01.1990" };
const person4: IPersonRequire = {
  id: 1,
  name: "John",
  age: 20,
  birthday: "01.01.1990",
};
const person5: IPersonReadOnly = {
  id: 1,
  name: "John",
  age: 20,
  birthday: "01.01.1990",
};
// person4.age = 21; // readonly error

type TypePersonRecord = Record<"name" | "age", string | number>;

const person6: TypePersonRecord = {
  age: 20,
  name: "John",
};

type TypeGetName = () => string;
type TypeReturn = ReturnType<TypeGetName>;

type NameExtract = Extract<"vlad" | "ivan", "ivan" | "alex">; //! Цей фрагмент коду визначає тип під назвою TypeName, який є об'єднанням загальних значень між двома заданими літеральними типами рядків. У цьому випадку, TypeName буде "ivan", оскільки це єдине значення, яке присутнє як у "vlad" | "ivan", так і у "ivan" | "alex".

type NameExclude = Exclude<"vlad" | "ivan", "ivan" | "alex">;
type NorNull = NonNullable<string | number | null | undefined>;
