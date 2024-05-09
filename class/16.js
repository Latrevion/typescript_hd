{
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["BOY"] = 0] = "BOY";
        Gender[Gender["Girl"] = 1] = "Girl";
    })(Gender || (Gender = {}));
    var l = { name: 'l1', age: 12, gender: Gender.BOY };
    var l2 = { name: 'l2', age: 13, gender: Gender.Girl };
    var users = [l, l2];
    console.log(users);
}
