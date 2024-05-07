{
    class Axios{
        private static instance:Axios | null = null
        private constructor(){
            // console.log('constructor');
        }

        static make():Axios{
            if(Axios.instance===null){
                console.log('create Axios');
                Axios.instance = new Axios()
            }
            return Axios.instance
        }
    }

    const instance = Axios.make()
    const instance1 = Axios.make()
    const instance2 = Axios.make()
    const instance3 = Axios.make()
    

     
}