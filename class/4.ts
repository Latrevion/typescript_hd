{
    class Person{
        protected name:string
        age:number
        private site:string ='open.com'
        private info():string{
            return `${this.name}:${this.age},${this.site}`
        }
        protected getInfo():string{
            return this.info()
        }
        
    }
    class User extends Person{
        constructor(n:string,a:number){
            super()
            this.name=n
            this.age =a
        }
        public show(){
            return this.getInfo()
        } 
    
    }
    
    const john = new User('luke',22);
    console.log(john.show());
    // console.log(john.site);

    
}