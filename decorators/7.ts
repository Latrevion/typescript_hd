{
  const musicDecoratorFactory = (type:string): ClassDecorator => {
    console.log(type);
   switch(type){
    case 'tank':
    return (target: Function) => {
      target.prototype.playMusic = (): void => {
        console.log("play tank music");
      };
   }
   default: 
    return (target: Function) => {
      target.prototype.playMusic = (): void => {
        console.log("play player music");
      };
    };
  };};

  @musicDecoratorFactory('tank')
  class Tank {
    public playMusic() {}
  }

  const t = new Tank();
  <any>t.playMusic();

@musicDecoratorFactory('player')
  class Player{
    public playMusic(){}
  }
  const p = new Player();
  <any>p.playMusic()
}
