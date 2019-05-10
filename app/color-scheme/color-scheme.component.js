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
var hero_1 = require("../hero/hero");
var ColorSchemeComponent = /** @class */ (function () {
    function ColorSchemeComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], ColorSchemeComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], ColorSchemeComponent.prototype, "activeHero", void 0);
    ColorSchemeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-color-scheme',
            templateUrl: '../color-scheme/color-scheme.component.html',
        })
    ], ColorSchemeComponent);
    return ColorSchemeComponent;
}());
exports.ColorSchemeComponent = ColorSchemeComponent;
//# sourceMappingURL=color-scheme.component.js.map