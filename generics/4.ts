{
    class User<T>{
        public constructor(private _user:T){
        }
        public get():T{
            return this._user
        }
    }

    interface UserInterface{
        name:string,
        age:number
    }

    const obj = new  User<UserInterface>({name:'luke',age:19})
    console.log(obj.get().age);
    

}