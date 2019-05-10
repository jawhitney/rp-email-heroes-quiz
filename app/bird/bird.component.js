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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BirdComponent = /** @class */ (function () {
    function BirdComponent() {
        this.hitBirdSound = new Audio("../music/hit-bird.mp3");
        this.gunSound = new Audio("../music/gun.mp3");
    }
    BirdComponent.prototype.ngOnInit = function () {
        this.birdsHit = 0;
        this.birdsMax = 10;
        this.birds = [];
        this.burstStatus = {};
        this.hideStatus = {};
        this.hitBirdSound.volume = 1.0;
        this.gunSound.volume = 1.0;
        for (var i = 0; i < this.birdsMax; i++) {
            this.birds.push(i);
            this.burstStatus[i] = false;
            this.hideStatus[i] = false;
        }
    };
    BirdComponent.prototype.shootBird = function () {
        if (this.birdHuntActive) {
            this.gunSound.play();
        }
    };
    BirdComponent.prototype.resetBirds = function () {
        for (var i = 0; i < this.birdsMax; i++) {
            this.burstStatus[i] = false;
            this.hideStatus[i] = false;
        }
    };
    BirdComponent.prototype.hitBird = function (n) {
        var _this = this;
        this.burstStatus[n] = true;
        this.hitBirdSound.play();
        this.birdsHit++;
        setTimeout(function () {
            _this.hitBirdSound.pause();
            _this.hitBirdSound.currentTime = 0;
            _this.hideStatus[n] = true;
            if (_this.birdsHit == _this.birdsMax) {
                _this.resetBirds();
            }
        }, 1000);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], BirdComponent.prototype, "birdHuntActive", void 0);
    BirdComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-bird',
            templateUrl: '../bird/bird.component.html',
        })
    ], BirdComponent);
    return BirdComponent;
}());
exports.BirdComponent = BirdComponent;
//# sourceMappingURL=bird.component.js.map