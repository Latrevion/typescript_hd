var Axios = /** @class */ (function () {
    function Axios(site) {
        this.site = 'https://www.openai.com/api';
        this.site = site || this.site;
    }
    Axios.prototype.get = function (url) {
        console.log("this site is ".concat(this.site, "/").concat(url));
        return [];
    };
    return Axios;
}());
var instance = new Axios();
instance.get('users');
