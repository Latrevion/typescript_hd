{
    var Axios = /** @class */ (function () {
        function Axios() {
        }
        Axios.getSite = function () {
            return this.site;
        };
        Axios.site = 'open.com';
        return Axios;
    }());
    var instance = new Axios();
    //  console.log(Axios.site);
    console.log(Axios.getSite());
}
