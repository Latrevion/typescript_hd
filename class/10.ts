{
    abstract class Animation{
        abstract name:string
        abstract move():void
        protected getPos():{x:number,y:number}{
            return {x:100,y:300}
        }
    }

    class Tank extends Animation{
            name:string = 'tank'
            public move():void{
                console.log(`${this.name} move`);
            }
    }

    class Player extends Animation{
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



