{
    var User = /** @class */ (function () {
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var obj = new User({ name: 'luke', age: 19 });
    console.log(obj.get().age);
}
