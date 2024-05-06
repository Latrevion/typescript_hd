class User{
    name:string
    age:number
    constructor(n:string,a:number){
        this.name=n
        this.age =a
    }
    info():string{
        return `${this.name}:${this.age}`
    }

}

const john = new User('luke',22);
const lisa = new User('lisa',23)
console.log(john.info());

const ps:User[]=[]
ps.push(john,lisa)
console.log(ps);

