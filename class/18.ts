{
    // interface Pay{
    //     (price:number):boolean
    // }
    // const WePay:Pay=(price:number)=>true
            
    interface PlayEndInterface{
        end():void
    }


    interface AnimationInterface extends PlayEndInterface{
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
                    end(){
            console.log('game over');
            
        }
    }

    class Player extends Animation implements AnimationInterface{
        name:string = 'player tank'
        public move():void{
            console.log(`${this.name}  move`);
        }
        end(){
            console.log('game over');
            
        }
    }

    const t= new Tank()
    const player = new Player()
    t.move()
    player.move()

}