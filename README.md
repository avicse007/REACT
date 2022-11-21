# REACT
Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

---------------------
Softwares Required:
1) Visual Studio Code. 
2) Chrome Web Browser
3) NodeJS Latest LTS

------------------

Typescript
* Optional typesystem for JS
* catch errors at compile time rather than fail at runtime
* enhance code quality, understandibility

npm i -g typescript

Basic types: number, string, boolean

let age:number = 24;

age = "Twenty five"; // error for tsc

Complex types: enum , object , array

enum LoggingLevel {
	INFO = "info",
	WARN = "warn",
	DEBUG = "debug"
}

let logLevel:LoggingLevel = LoggingLevel.DEBUG;

----

Object types:
1)   using type

type Person = {
	id:number;
	name:string;
}

let p:Person = {id:1, name: "Tim"};


2) using interface

interface Product {
	id: number;
	name: string;
	price : number;
}

let prd: Product = {id: 1, name : 'Sony', price: 89000.00};

--> extendable ==> Specialization relationship

interface Mobile extends Product {
	connectivity:string;
	camera:string;
}

let mobile:Mobile = {id: 1, name : 'iPhone', price: 89000.00, connectivity: '5G', camera: 'some MP'};

--> Realization relationship

interface Renderer {
	render():JSX;
}

class DomRenderer implements Renderer {
	// state and behaviour
	render(): JSX {
		return ...
	}
}

class TvRenderer implements Renderer {
	// state and behaviour
	render(): JSX {
		return ...
	}
}

let renderer:Renderer = getRenderer(); // DomRenderer or TvRenderer

renderer.render();

===

3) class

======================

"any" type and "unknown" type

let data:any  = 0;
data  = "test";
data = true;


let data:unknown = 0;
data  = "test";
data = true;


```
function doTask(arg:unknown): void {
//function doTask(arg:any): void {
	if(typeof arg === 'function') {
		arg();
	} else if(typeof arg === 'string') {
		console.log(arg);
  	}
}

//doTask(console.log);
doTask("testing....");
```

Type assertions using "as"

<div id="card"></div>

const myDiv = document.getElementById("card") as HTMLDivElement;

```

interface Persons {
	status: "loading" | "idle"; // union type
	error: string | null,
	list:string[]
}

let data = {
  list:[],
  error: null,
  status: "idle"	
} as Persons;


let p:Persons = data;

let persons:Persons = getData() as Persons;
```



