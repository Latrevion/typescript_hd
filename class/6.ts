{
  class User {
    constructor(public name: string) {
      this.name = this.initName(name);
    }

    private initName(name:string){
        return `${name}-open.com`
    }
  }

  const luke = new User("luke");
  console.log(luke.name);
}
