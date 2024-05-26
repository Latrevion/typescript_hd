"use strict";
var User;
(function (User) {
    User.luke = 'open.com';
})(User || (User = {}));
var member;
(function (member) {
    member.luke = 'openToGo.com';
})(member || (member = {}));
console.log(User.luke);
console.log(member.luke);
