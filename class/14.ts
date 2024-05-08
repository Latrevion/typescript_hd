interface UserInterface{
    name:string,
    age:number,
    isLock:boolean
}

const user:UserInterface ={
    name:'luke',
    age:11,
    isLock:false
}

function isLock(user:UserInterface,lock:boolean):UserInterface{
        user.isLock =lock
        return user
}

isLock(user,true)

console.log(user);
