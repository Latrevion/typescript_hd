{
   const PropDecorator:PropertyDecorator=(...args:any[])=>{
        console.log(args);
   }

   const ParamsDecorator:ParameterDecorator= (...args:any[])=>{
    console.log(args);
   }

    class Hd{
        @PropDecorator
        public title:string|undefined

        public show(id:number=1,computed:boolean, @ParamsDecorator content:string){

        }

    }
    



}