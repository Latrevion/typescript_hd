{
  type IsAdmin = boolean;
  type Gender = "boy" | "girl";
  type User = {
    name: string;
    age: number;
    isAdmin: IsAdmin;
    gender: Gender;
    show(): string;
    [key:string]:any
  };
  // interface User {
  //     name:string,
  //     age:number
  // show(): string;
  // }
  const luke: User = {
    name: "luke",
    age: 18,
    show: () => "open.com",
    isAdmin: true,
    gender: "boy",
    city:'A'
  };
}
