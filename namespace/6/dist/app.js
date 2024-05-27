define("user", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.title = exports.User = void 0;
    var User;
    (function (User) {
        User.name = 'open.com';
    })(User || (exports.User = User = {}));
    exports.title = 'uncle';
});
define("app", ["require", "exports", "user"], function (require, exports, user_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.body.insertAdjacentHTML('beforeend', `<h2>${user_js_1.User.name}</h2>`);
});
