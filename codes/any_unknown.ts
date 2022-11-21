
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