// HOF --> OCP ==> Closed for Change open for extension
function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
function filter(elems, predicate) {
    var res = [];
    forEach(elems, function (e) {
        if (predicate(e)) {
            res.push(e);
        }
    });
    return res;
}
var nos = [5, 2, 77, 44, 12, 90];
forEach(nos, console.log);
var names = ["Gopal", "Leena", "Beena", "Raj"];
forEach(names, console.log);
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var evens = filter(nos, function (e) { return e % 2 === 0; });
var mobiles = filter(products, function (p) { return p.category === 'mobile'; });
forEach(evens, console.log);
forEach(mobiles, console.log);
