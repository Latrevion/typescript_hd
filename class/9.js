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
var Article = /** @class */ (function () {
    function Article() {
        this._lists = [];
    }
    Object.defineProperty(Article.prototype, "articles", {
        get: function () {
            return this._lists.map(function (article) {
                article.title = article.title.substr(0, 2);
                return article;
            });
        },
        set: function (lists) {
            this._lists = lists;
        },
        enumerable: false,
        configurable: true
    });
    return Article;
}());
var l = new Article();
l.articles = [{ title: 'look' }, { title: 'package' }];
console.log(l.articles);
