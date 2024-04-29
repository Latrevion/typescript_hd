// let aLink = document.querySelector('#luke')  as HTMLLinkElement
// aLink.href
var l = /** @class */ (function () {
    function l(el) {
        this.el = el;
    }
    l.prototype.html = function () {
        return this.el.innerHTML;
    };
    return l;
}());
var el1 = document.querySelector('.look');
var obj = new l(el1);
console.log(obj.html());
