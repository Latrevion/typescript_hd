{
    class Person{
        protected name:string
        age:number
        protected info():string{
            return `${this.name}:${this.age}`
        }
    }
    class User extends Person{
        constructor(n:string,a:number){
            super()
            this.name=n
            this.age =a
        }
        public show(){
            return this.info()
        } 
    
    }
    
    const john = new User('luke',22);
    console.log(john.show());
    
    
    
}