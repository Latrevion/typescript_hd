{
  const SleepDecorator=(time:number):MethodDecorator => (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = () => {
      setTimeout(() => {
        method();
      }, time);
    };
  };


  class User {
    @SleepDecorator(2000)
    public response() {
        console.log(
            'luke'
        );
    }
  }


  new User().response();
}
