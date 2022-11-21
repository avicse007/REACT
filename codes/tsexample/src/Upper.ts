export default function Upper(target:Object, key:string) {
    let val = target[key]; // rakesh
    console.log("Upper ", target);

    const setter = (data:string) => {
     console.log(data, val);
       val = data.toUpperCase();
    }

    const getter = () => val;

    Object.defineProperty(target, key , {
        get:getter,
        set:setter
    });

    /*
        get name() {

        }

        set name() {
            
        }


    */


}