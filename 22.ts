type userType = {name:string,age:number}

let addUser=(user:userType):void=>{
    console.log('add the user');   
}

addUser({name:'luke',age:18})

let updateUser=(user:userType):void=>{
    console.log('update the user');
}
updateUser({
    name:'luke',
    age:20
})