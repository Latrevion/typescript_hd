let aa:string|undefined |null='luke'

aa=undefined

// const el:HTMLDivElement = document.querySelector('.luke') as HTMLDivElement
const el:HTMLDivElement = document.querySelector('.luke')!
console.log(el.innerHTML);


