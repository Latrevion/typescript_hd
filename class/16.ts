{
    enum Gender{
        BOY,
        Girl
    }
    interface UserInterface{
        name:string,
        age:number
        gender:Gender
    }
    const l:UserInterface = {name:'l1',age:12,gender:Gender.BOY}
    const l2:UserInterface ={name:'l2',age:13,gender:Gender.Girl}
    const users:UserInterface[]=[l,l2]

    console.log(users);
    
}