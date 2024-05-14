const moveDecorator:ClassDecorator = (target:Function)=>{
    target.prototype.name = 'luke'
    target.prototype.getPosition = ():{x:number,y:number}=>{
        return {x:100,y:200}
    }
}

@moveDecorator
class Tank{
 public getPosition(){

 }
}

const t = new Tank()
console.log(t.getPosition());
console.log((t as any).name);

@moveDecorator
class Player{
 public getPosition(){

 }
}
const p  = new Player()
console.log(p.getPosition());
