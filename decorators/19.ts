{
  const LowerDecorator: PropertyDecorator = (
    target: Object,
    propertyKey: string | symbol
  ) => {
    // console.log(propertyKey);
    let value:string
    Object.defineProperty(target,propertyKey,{
        get:()=>{
            return value.toLocaleLowerCase()
        },
        set:(v)=>{
            value =  v
        }
    })
  };

  class Hd {
    @LowerDecorator
    public title: string | undefined;
  }

  const obj = new Hd();

  obj.title = "OPEN";

  console.log(obj.title);
}
