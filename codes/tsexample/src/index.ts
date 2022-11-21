import Person from "./Person";
import User from "./User";

let p1:Person = new Person("Jack",33);

let p2:Person = new Person("Jill",31);

console.log(p1.getName(), p1.getAge(), p1["country"]);

console.log(p2.getName(), p2.getAge(), p2["country"]);


let u1:User = new User("kim");
let u2:User = new User("rakesh");

console.log(u1.getName());
console.log(u2.getName());

console.time("a");
console.log(u1.fibanocci(34));
console.timeEnd("a");

console.time("b");
u1.fibanocci(34);
console.timeEnd("b");