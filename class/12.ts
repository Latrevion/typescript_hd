 interface UserInterface {
    name:string,
    age?:number,
    info?():string
    [a:string]:any
 }

 let u:UserInterface ={
    name:'luke',
    age:20,
    info(){
        return `${this.name}-${this.age}`
    },
    book:true
 }

 console.log(u);
 