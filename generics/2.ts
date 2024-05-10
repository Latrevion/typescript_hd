
function getLength<T extends string | any[]>(arg:T):number{
    return arg.length
}

console.log(getLength('open.com'));
console.log(getLength(['a','b']));

