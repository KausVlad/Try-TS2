function gen1<T>(args: T): T {
  return args;
}

gen1<string>("hello");

const gen2 = <T>(args: T): T => {
  return args;
};

gen2<string>("hello");

class Gen1<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const genValue = new Gen1<string>("hello");

interface IGen<T, K> {
  value: T;
  key: K;
}

const pair: IGen<string, number> = {
  key: 1,
  value: "hello",
};

type TypeLength = {
  length: number;
};

function gerGenLength<T extends TypeLength>(arg: T): number {
  return arg.length;
}

console.log(gerGenLength([1, 2, 3]));
console.log(gerGenLength("hello"));
