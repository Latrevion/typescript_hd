
    import 'reflect-metadata'
const RequiredDecorator:ParameterDecorator= (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number)=>{
//what params require validate
let requiredParams:number[]=[]
requiredParams.push(parameterIndex)
Reflect.defineMetadata('required',requiredParams,target,propertyKey as string)
}

const validateDecorator:MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor:PropertyDescriptor)=>{
//    console.log(Reflect.getMetadata('required',target,propertyKey));
const method  = descriptor.value 
descriptor.value = function (){
    const requiredParams:number[] = Reflect.getMetadata('required',target,propertyKey)||[]
    requiredParams.forEach(index=>{
        if(index>arguments.length||arguments[index]==undefined){
throw new Error('please send params')
        }
    })
    return method.apply(this,arguments)
}
}


class user{
    @validateDecorator
    find(name:string,@RequiredDecorator id:number){
         console.log(id);
    }
}

new user().find('lv',34)
