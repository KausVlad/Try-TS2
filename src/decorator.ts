function logClass(constructor: Function) {
  console.log(`${constructor.name} class`);
}

function LogMethod(
  target: object,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log(`${key} method`);
}

@logClass
class Plane {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }

  @LogMethod
  getId() {
    return this.id;
  }
}
