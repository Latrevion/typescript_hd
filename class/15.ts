{
  interface UserInterface {
    name: string;
    age: number;
  }

  class User {
    _info: UserInterface;
    constructor(user: UserInterface) {
      this._info = user;
    }
    get info(): UserInterface {
      return this._info;
    }
  }

  let u = new User({ name: "luke", age: 22 });
  console.log(u.info);
  
}
