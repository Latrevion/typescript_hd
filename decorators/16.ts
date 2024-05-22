{
  type userType = { name: string; isLogin: boolean; permissions: string[] };

  const user:userType = {
    name: "luke",
    isLogin: false,
    permissions:['store']
  };

  const AccessDecorator=(keys:string[]): MethodDecorator=>{
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        const method = descriptor.value;
        const validate = ()=>{
          return  keys.every(k=>{
                return user.permissions.includes(k)
            })

        }

        descriptor.value = () => {
            if (user.isLogin && validate()) {
                return method();
                
            }
            alert("please login in ");
            location.href = "login.html";
        };

    };
} 

  class Article {
    show() {
      console.log("show article");
    }

    @AccessDecorator(['store','manager'])
    store() {
      console.log("save article");
    }
  }

  new Article().show();
}
