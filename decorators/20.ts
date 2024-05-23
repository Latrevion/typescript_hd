{
  const RandomColorDecorator: PropertyDecorator = (
    target: object,
    propertyKey: string | symbol
  ) => {
    const colors: string[] = ["red", "green", "yellow", "green", "#383838"];
    Object.defineProperty(target, propertyKey, {
      get() {
        return colors[Math.floor(Math.random() * colors.length)];
      },
    });
  };

  class LK {
    @RandomColorDecorator
    public color: string | undefined;

    public draw(){
        document.body.insertAdjacentHTML('beforeend',`<div style='height:200px;width:200px;background:${this.color}'>open.com</div>`)
    }
  }

//   console.log(new LK().color);
  console.log(new LK().draw());
}
