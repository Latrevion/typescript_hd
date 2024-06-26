"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const musicDecoratorFactory = (type) => {
        console.log(type);
        switch (type) {
            case 'tank':
                return (target) => {
                    target.prototype.playMusic = () => {
                        console.log("play tank music");
                    };
                };
            default:
                return (target) => {
                    target.prototype.playMusic = () => {
                        console.log("play player music");
                    };
                };
        }
        ;
    };
    let Tank = class Tank {
        playMusic() { }
    };
    Tank = __decorate([
        musicDecoratorFactory('tank')
    ], Tank);
    const t = new Tank();
    t.playMusic();
    let Player = class Player {
        playMusic() { }
    };
    Player = __decorate([
        musicDecoratorFactory('player')
    ], Player);
    const p = new Player();
    p.playMusic();
}
