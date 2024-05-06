class Axios{
    readonly site:string ='https://www.openai.com/api'
    public constructor(site?:string){
        this.site=site||this.site
    }
    get(url:string):any[]{
        console.log(`this site is ${this.site}/${url}`);
        return []
    }
}

const instance = new Axios()
instance.get('users')