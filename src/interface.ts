interface IUserEmail {
  email: string;
}

interface IUser extends IUserEmail {
  name: string;
  age: number;
}

type TypeUserEmail = {
  email: string;
};

type TypeUser = {
  name: string;
  age: number;
} & TypeUserEmail;

const user2: IUser = {
  name: "John",
  age: 20,
  email: "email",
};
