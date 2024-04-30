//1
// interface User {
//   name:string
// }

// interface User{
//     age:number
// }

// const people: User ={
//     name:'luke',
//     age:12
// }

//2
// interface Member{
//     name:string
// }

// interface User extends Member{
//     age:number
// }

// class Person implements User{
//     age:number=12;
//     name:string='luke';
// }

//3
// type Age={
//     age:number
// }

// type Name={
//     name:string
// }

// type User = Age & Name

// const luke:User ={name:'luke',age:22}

//4
// type User = {name:string,age:number}

// class Person implements User{
//     name:string='luke';
//     age:number=12;
// }

//5
interface User{
    name:string
}

type Member ={age:number}


type Person = Member & User

const luke:Person={
    name:'luke',
    age:12,
}