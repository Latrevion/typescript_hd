{
    const showDecorator:MethodDecorator =(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        // console.log(args);
        
        // const method = args[2].value
        // method()

        descriptor.value = ()=>{
            console.log('luke2');
        }
    }
    class User{
        @showDecorator
       public show(){
          console.log('luke');
       } 
    }

    const u = new User()
    u.show()
}