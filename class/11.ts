{
    interface AnimationInterface{
        name: string 
        move():void
    }

    abstract class Animation{
        protected getPos():{x:number,y:number}{
            return {x:100,y:300}
        }
    }

    class Tank extends Animation implements AnimationInterface{
            name:string = 'tank'
            public move():void{
                console.log(`${this.name} move`);
            }
    }

    class Player extends Animation implements AnimationInterface{
        name:string = 'player tank'
        public move():void{
            console.log(`${this.name}  move`);
        }
    }

    const t= new Tank()
    const player = new Player()
    t.move()
    player.move()

}



