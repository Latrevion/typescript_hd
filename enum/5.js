function hd() {
    var a = 'luke';
    var b = function (x, y) { return x + y; };
    return [a, b];
}
// const [n,m1] = hd();
// console.log(
//     (m1 as Function)(1,2030)
// );
// const [n,m1] = hd() as [string,Function]
var _a = hd(), n = _a[0], m1 = _a[1];
console.log(m1(1, 9));
