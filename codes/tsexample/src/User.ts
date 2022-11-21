
import Memo from "./Memo";
import Upper from "./Upper";

export default class User {
    @Upper
    name:string;
    
    constructor(name:string) {
        this.name = name;
    }
    getName() : string {
        return this.name;
    }

    @Memo
    fibanocci(no:number): number {
        return (no == 0) || (no == 1) ? no : this.fibanocci(no -1)  + this.fibanocci(no -2);
    }
}