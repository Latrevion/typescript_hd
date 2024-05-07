// class User{
//     private  _name:string 
//     constructor(name:string){
//             this._name = name 
//     }
//     public get name():string{
//         return this._name
//     }
//     public set name(name:string){
//         this._name =name
//     }
// }

// const luke = new User('luke1')
// luke.name='look'
// console.log(luke.name);


class Article{
    private  _lists:any[]=[] 

    public get articles():any[]{
        return this._lists.map(article=>{
            article.title =article.title.substr(0,2)
            return article
        })
    }

    public set articles(lists:any[]){
        this._lists =lists
    }
}

const l = new Article()
l.articles =[{title:'look'},{title:'package'}]
console.log(l.articles);



