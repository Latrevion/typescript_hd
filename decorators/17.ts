{
  const RequestDecorator = (url: string): MethodDecorator => {
    return (
      target: Object,
      propertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) => {
      const method = descriptor.value;
      new Promise<any[]>((resolve) => {
        setTimeout(() => {
          resolve([{ name: "luke" }, { name: "john" }]);
        }, 2000);
      }).then((user) => {
        method(user);
      });
    };
  };

  class User {
    @RequestDecorator("https://www.open.com")
    public all(users: any[]) {
      console.log(users);
    }
  }
}
