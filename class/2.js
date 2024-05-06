{
    var User = /** @class */ (function () {
        function User(n, a) {
            this.name = n;
            this.age = a;
        }
        User.prototype.info = function () {
            return "".concat(this.name, ":").concat(this.age);
        };
        return User;
    }());
    var john = new User("luke", 22);
    var lisa = new User("lisa", 23);
    for (var key in lisa) {
        if (john.hasOwnProperty(key)) {
            console.log(lisa[key]);
        }
    }
}
