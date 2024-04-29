function hd(){
    let a = 'luke'
    let b = (x:number,y:number):number=>x+y
    return [a,b] as const 
}

// const [n,m1] = hd();

// console.log(
//     (m1 as Function)(1,2030)
// );


// const [n,m1] = hd() as [string,Function]



const [n,m1]=hd();

console.log(
    m1(1,9)
);


