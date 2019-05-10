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
var section_1 = require("../section/section");
var hero_1 = require("../hero/hero");
var analytics_service_1 = require("../analytics/analytics.service");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.onBackToHeroes = new core_1.EventEmitter();
        this.onRideTheLightening = new core_1.EventEmitter();
        this.onEnableBirdHunt = new core_1.EventEmitter();
    }
    NavigationComponent.prototype.showHeroesSection = function () {
        this.onBackToHeroes.emit(true);
        this.correctAnswers = 0;
        this.analyticsService.pushEvent('Click', 'CTA', 'Back to Heroes - Navigation');
    };
    NavigationComponent.prototype.enableEasterEggs = function () {
        this.onRideTheLightening.emit(true);
        this.onEnableBirdHunt.emit(true);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", section_1.Section)
    ], NavigationComponent.prototype, "section", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NavigationComponent.prototype, "correctAnswers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NavigationComponent.prototype, "totalQuestions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], NavigationComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NavigationComponent.prototype, "showQuiz", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NavigationComponent.prototype, "showQuizResults", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NavigationComponent.prototype, "activeQuestion", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], NavigationComponent.prototype, "quizResults", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "onBackToHeroes", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "onRideTheLightening", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "onEnableBirdHunt", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-navigation',
            templateUrl: '../navigation/navigation.component.html',
        }),
        __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map