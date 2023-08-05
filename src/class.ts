class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  #getUser2(): string {
    //! || # or private || #getUser1 is a private method in the User class. The # symbol is used to denote private class elements in TypeScript. A private method or property can only be accessed within the class where it is defined and cannot be accessed from outside the class.
    return `Name ${this.name}, Age ${this.age}`;
  }

  getUser1() {
    this.#getUser2();
  }

  protected getUser3() {
    //! У TypeScript, щоб позначити елемент класу як захищений (protected), використовується ключове слово protected.    Захищені елементи класу можуть бути властивостями, методами або конструкторами. Вони доступні в межах самого класу, а також в похідних класах.
    return `Name ${this.name}, Age ${this.age}`;
  }
}

class User2 extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  test() {
    return this.getUser3();
  }
}

console.log(new User("Kaus", 30).getUser1());
