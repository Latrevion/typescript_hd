{
    class Axios{
    static site:string = 'open.com'
    public static getSite():string{
        return this.site
    }

}
 const instance = new Axios()
//  console.log(Axios.site);
 console.log(Axios.getSite());
 
}