//generics
// let a:string='luke'
// a= 34


function dump<T>(arg:T):T{
    return arg
}

let luke =dump<string>('luke.com')
let l  =dump<boolean>(true)

