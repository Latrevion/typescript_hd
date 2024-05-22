{
  type userType = { name: string; isLogin: boolean; permissions: string[] };

  const user:userType = {
    name: "luke",
    isLogin: true,
    permissions:['store','manage']
  };

  const AccessDecorator=(keys:string[]): MethodDecorator=>{
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        // const method = descriptor.value;

        const validate = ()=>
            keys.every(k=>{
                return user.permissions.includes(k)
        })

        

        descriptor.value = () => {
            if (user.isLogin && validate()) {
                // return method();
                alert('validate success')
            }else{
                alert('validate error')
                // alert("please login in ");
                // location.href = "login.html";
            }
        };

    };
} 

  class Article {
    show() {
      console.log("show article");
    }

    @AccessDecorator(['store','manage'])
    store() {
      console.log("save article");
    }
  }

  new Article().store();
}
