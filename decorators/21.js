"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
let lk = {
    name: "luke",
};
Reflect.defineMetadata('xj', { url: 'luke.com' }, lk, 'name');
console.log(Reflect.getMetadata('xj', lk, 'name'));
