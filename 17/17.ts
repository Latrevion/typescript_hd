// let hd:void =undefined
// console.log(hd);


// function h():string|void{
//     return '1'
// }

// console.log(h());


function h111():never{
  throw new Error('error')
}
console.log(h111())