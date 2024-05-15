"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const MessageDecorator = (target) => {
    target.prototype.message = (msg) => {
        console.log(msg);
    };
};
let LoginController = class LoginController {
    login() {
        console.log('loading');
        this.message('successful');
    }
};
LoginController = __decorate([
    MessageDecorator
], LoginController);
let ArticleController = class ArticleController {
    store() {
        this.message('add article success');
    }
};
ArticleController = __decorate([
    MessageDecorator
], ArticleController);
const l = new LoginController();
l.login();
const a = new ArticleController();
a.store();
