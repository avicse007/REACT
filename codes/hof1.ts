// HOF --> OCP ==> Closed for Change open for extension

function forEach<T>(elems:T[], action:(elem:T) => void): void {
	let i: number;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

function filter<T>(elems: T[], predicate:(elem:T) => boolean): T[] {
	let res:T[] = [];
	forEach(elems, e => {
		if(predicate(e)) {
			res.push(e);
		}
	});
	return res;
} 

let nos:number[] = [5,2,77,44,12,90];
forEach(nos, console.log);

let names:string[] = ["Gopal","Leena", "Beena", "Raj"]
forEach(names, console.log);

type Product = {
  id:number;
  name:string;
  price:number;
  category: string
}
let products:Product[] = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

let evens:number[] = filter(nos, e => e % 2 === 0);
let mobiles:Product[] = filter(products, p => p.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);
