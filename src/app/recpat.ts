const username: string = "alden";
const suma = (a: number, b: number) => {
  return a + b
}
suma(1,2);

class Person {
  constructor (public age: number, public lastname: string) {}
}

const vini = new Person(25, "Chavarría");
console.log(vini.age)
