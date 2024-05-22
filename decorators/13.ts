{
  const ErrorDecorators: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
   const method = descriptor.value
descriptor.value = ()=>{
    try {
     method()   
    } catch (error:any) {
       console.log(`%copenim.com the error`,'color:red;font-size:30px');
       console.log(`%c${error.message}`,'color:red;font-size:16px');
       
    }
}

  };

  class User {
   @ErrorDecorators     
    find() {
      throw new Error("there is a error");
    }

    @ErrorDecorators
    create(){
        throw new Error('created error')
    }
  }


//   new User().find()
new User().create()
}
