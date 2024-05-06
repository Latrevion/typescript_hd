{
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
            this.name = this.initName(name);
        }
        User.prototype.initName = function (name) {
            return "".concat(name, "-open.com");
        };
        return User;
    }());
    var luke = new User("luke");
    console.log(luke.name);
}
