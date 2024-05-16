{
const MessageDecorator:ClassDecorator= (target:Function)=>{
    target.prototype.message = (msg:string)=>{
        console.log(msg);
    }
}

@MessageDecorator
class LoginController{
    public login(){
    //    console.log('loading');
    //    this.message('successful')
    }
}

@MessageDecorator
class ArticleController{
    public store(){
        // this.message('add article success')
    }
}

const l = new LoginController()
l.login()
const a = new ArticleController()
a.store()
}