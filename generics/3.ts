
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




class Collection<T> {
    data: T[] = [];
    public push(...items: T[]) {
      this.data.push(...items);
    }
    public shift(): T {
      if(this.data.length>0){
          return this.data.shift() as T;
      }else{
          throw new Error('no number')
      }
    }
  }

 const l = new Collection<number>() 
    l.push(1,2,3,4,5)    
    console.log(l.shift());
    
}