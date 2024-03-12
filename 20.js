// function sum(a:number,b:number,r?:number){
// r =r??0.6
function sum(a, b, r) {
    if (r === void 0) { r = 1; }
    console.log(r);
    return a + b;
}
console.log(sum(1, 2));
