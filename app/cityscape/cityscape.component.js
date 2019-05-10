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
var CityscapeComponent = /** @class */ (function () {
    function CityscapeComponent() {
    }
    CityscapeComponent.prototype.ngOnInit = function () {
        this.maxBuildings = 100;
        this.buildings = [];
        this.generateCityscape();
    };
    CityscapeComponent.prototype.generateCityscape = function () {
        this.cityscapeNumber = Math.floor(Math.random() * 4) + 1;
    };
    CityscapeComponent.prototype.onSwitchHero = function (switchHero) {
        this.generateCityscape();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CityscapeComponent.prototype, "showQuiz", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CityscapeComponent.prototype, "showQuizResults", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CityscapeComponent.prototype, "colorScheme", void 0);
    CityscapeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-cityscape',
            templateUrl: '../cityscape/cityscape.component.html',
        })
    ], CityscapeComponent);
    return CityscapeComponent;
}());
exports.CityscapeComponent = CityscapeComponent;
//# sourceMappingURL=cityscape.component.js.map