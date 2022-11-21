export default function Memo(target:any, methodName:string, descriptor:PropertyDescriptor) {
    let fn: Function = descriptor.value;
    let cache:any = {};
    // add (4,5)
    // fibanocci(34);
    // getEmployee(222);
    descriptor.value = function(...args:number[]) {
        let key  = args.join("_"); // 4_5
        if(!cache[key]) {
            cache[key] = fn.apply(target, args); // actual code
        } else {
            console.log("cache hit !!!");
        }
        return cache[key];
    }
}

// obj.fn(arg)
// fn.call(obj, arg);
// fn.apply(obj,[args]);