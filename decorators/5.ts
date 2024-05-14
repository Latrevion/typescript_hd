{
  const moveDecorator: ClassDecorator = (target: Function) => {
    target.prototype.name = "luke";
    target.prototype.getPosition = (): { x: number; y: number } => {
      return { x: 100, y: 200 };
    };
  };

  const musicDecorator: ClassDecorator = (target: Function) => {
    target.prototype.playMusic = (): void => {
      console.log("play music");
    };
  };

  @moveDecorator
  @musicDecorator
  class Tank {
    public getPosition() {}
    public playMusic() {}
  }

  const t = new Tank();
  console.log(<any>t.getPosition());
  <any>t.playMusic();
}
