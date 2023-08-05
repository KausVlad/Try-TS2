type TypeUser1 = {
  name: string;
  age: number;
};

type TypeHobby = {
  listHobby: string[];
  favoriteHobby: string;
};

const user1: TypeUser1 = {
  age: 20,
  name: "Kaus",
};

const hobby: TypeHobby = {
  listHobby: ["gaming", "coding", "sleeping"],
  favoriteHobby: "gaming",
};

let userFull: TypeUser1 & TypeHobby;

// eslint-disable-next-line prefer-const
userFull = {
  ...user1,
  ...hobby,
};
