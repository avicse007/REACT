export default function Nationality(config:any) { // factory method
    return function(target:any) { // decorator
        console.log("called " , target);
        Object.defineProperty(target.prototype, "country", {
            value: config.name
        })
    }
}