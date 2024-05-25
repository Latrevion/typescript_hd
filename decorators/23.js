"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const RequiredDecorator = (target, propertyKey, parameterIndex) => {
    //what params require validate
    let requiredParams = [];
    requiredParams.push(parameterIndex);
    Reflect.defineMetadata('required', requiredParams, target, propertyKey);
};
const validateDecorator = (target, propertyKey, descriptor) => {
    //    console.log(Reflect.getMetadata('required',target,propertyKey));
    const method = descriptor.value;
    descriptor.value = function () {
        const requiredParams = Reflect.getMetadata('required', target, propertyKey) || [];
        requiredParams.forEach(index => {
            if (index > arguments.length || arguments[index] == undefined) {
                throw new Error('please send params');
            }
        });
        return method.apply(this, arguments);
    };
};
class user {
    find(name, id) {
        console.log(id);
    }
}
__decorate([
    validateDecorator,
    __param(1, RequiredDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], user.prototype, "find", null);
new user().find('lv', 34);
