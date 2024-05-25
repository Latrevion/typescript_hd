    import 'reflect-metadata'
const RequiredDecorator:ParameterDecorator= (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number)=>{
//what params require validate
let requiredParams:number[]=[]
requiredParams.push(parameterIndex)
Reflect.defineMetadata('required',requiredParams,target,propertyKey as string)
}

const validateDecorator:MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor:PropertyDescriptor)=>{
   console.log(Reflect.getMetadata('required',target,propertyKey));
}


class user{
    @validateDecorator
    find(name:string,@RequiredDecorator id:number){
         console.log(id);
    }
}

// new user().find(undefined)
