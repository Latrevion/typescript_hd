function luke(arg: boolean):string|number {
  return arg ? "yes" : "no";
}

let res = luke(true) as number
res = 123
console.log(res);

