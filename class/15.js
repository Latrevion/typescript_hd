{
    var User = /** @class */ (function () {
        function User(user) {
            this._info = user;
        }
        Object.defineProperty(User.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var u = new User({ name: "luke", age: 22 });
    console.log(u.info);
}
