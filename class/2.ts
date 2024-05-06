{
  class User {
    public name: string;
    public age: number;
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
    public info(): string {
      return `${this.name}:${this.age}`;
    }
  }

  const john = new User("luke", 22);
  const lisa = new User("lisa", 23);


  for(const key in lisa){
    if(john.hasOwnProperty(key)){
        console.log(lisa[key])
    }
  }
}
