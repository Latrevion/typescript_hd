
{
    const showDecorator:MethodDecorator =(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=>{
        descriptor.value = ()=>{
            console.log('luke2');
        }
        descriptor.writable =false
    }

    class User{
        @showDecorator
       public static show(){
          console.log('luke');
       } 
    }

   User.show= ()=>{
    console.log('show method');
   }

   User.show()
}