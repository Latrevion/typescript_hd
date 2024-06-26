{
    const highlightDecorator:MethodDecorator =(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
    
       const method = descriptor.value

       descriptor.value = ()=>{
        return `<div style='color:red'>${method()}</div>`
       } 
    }

    class User{
        @highlightDecorator
       public response(){
       return 'luke'
       } 
    }
    console.log(new User().response());
    
    document.body.insertAdjacentHTML('beforeend',new User().response())
}