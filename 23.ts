// let a:string
// a='luke'

// let hd1:(a:number,b:number)=>number;

// hd1= (x:number,y:number):number=>{
//     return x+y
// };

// console.log(hd1(1,1));

// let hd2: (a: number, b: number) => number;

// hd2 = (x: number, y: number): number => {
//   return x + y;
// };

// console.log(hd2(1, 1)); // 应该会输出 2

type userType = {name:string,age:number}

type userAddFUn = (user:userType)=>boolean


let addUser:userAddFUn=(user:userType):boolean=>{
    console.log('add the user')

    return true
}

addUser({name:'luke',age:18})


