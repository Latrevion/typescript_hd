// let aLink = document.querySelector('#luke')  as HTMLLinkElement
// aLink.href

class l{
  el:HTMLDivElement
  constructor(el:HTMLDivElement){
    this.el =el
  }
  html(){
    return this.el.innerHTML
  }
}


const el1 = document.querySelector('.look') as HTMLDivElement
const obj = new l(el1)
console.log(obj.html());

