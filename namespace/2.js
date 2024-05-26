"use strict";
var User;
(function (User) {
    User.lk = 'lk.com';
    let member;
    (function (member) {
        member.lv = 'teacher';
    })(member = User.member || (User.member = {}));
})(User || (User = {}));
console.log(User.member.lv);
