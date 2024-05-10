{
    // class Collection {
    //   data: number[] = [];
    //   public push(...items: number[]) {
    //     this.data.push(...items);
    //   }
    //   public shift(): number {
    //     if(this.data.length>0){
    //         return this.data.shift() as number;
    //     }else{
    //         throw new Error('no number')
    //     }
    //   }
    // }
    // const numberCollection = new Collection();
    // numberCollection.push(1, 2, 3, 4, 5);
    // console.log(numberCollection.shift());
    // console.log(numberCollection.shift());
    // console.log(numberCollection.shift());
    // console.log(numberCollection.shift());
    // console.log(numberCollection.shift());
    // console.log(numberCollection.shift());
    var Collection = /** @class */ (function () {
        function Collection() {
            this.data = [];
        }
        Collection.prototype.push = function () {
            var _a;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, items);
        };
        Collection.prototype.shift = function () {
            if (this.data.length > 0) {
                return this.data.shift();
            }
            else {
                throw new Error('no number');
            }
        };
        return Collection;
    }());
    var l = new Collection();
    l.push(1, 2, 3, 4, 5);
    console.log(l.shift());
}
