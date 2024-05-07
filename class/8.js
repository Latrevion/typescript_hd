{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
            // console.log('constructor');
        }
        Axios.make = function () {
            if (Axios.instance === null) {
                console.log('create Axios');
                Axios.instance = new Axios();
            }
            return Axios.instance;
        };
        Axios.instance = null;
        return Axios;
    }());
    var instance = Axios_1.make();
    var instance1 = Axios_1.make();
    var instance2 = Axios_1.make();
    var instance3 = Axios_1.make();
}
