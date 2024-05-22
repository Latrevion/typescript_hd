{
  const user = {
    name: "luke",
    isLogin: false,
  };

  const AccessDecorator: MethodDecorator = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value =()=>{
        if(user.isLogin){
            return method()
        }
        alert('please login in ')
        location.href = 'login.html'
    }
  };

  class Article {
    show() {
      console.log("show article");
    }

    @AccessDecorator
    store() {
      console.log("save article");
    }
  }

  new Article().show();
}
