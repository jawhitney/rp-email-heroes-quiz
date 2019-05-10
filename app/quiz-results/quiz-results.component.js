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
var analytics_service_1 = require("../analytics/analytics.service");
var QuizResultsComponent = /** @class */ (function () {
    function QuizResultsComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.onBackToHeroes = new core_1.EventEmitter();
    }
    QuizResultsComponent.prototype.showHeroesSection = function () {
        this.onBackToHeroes.emit(true);
        this.analyticsService.pushEvent('Click', 'CTA', 'Back to Heroes - Quiz Results');
    };
    QuizResultsComponent.prototype.clickResource = function (url) {
        this.analyticsService.pushEvent('Click', 'CTA', url);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], QuizResultsComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QuizResultsComponent.prototype, "showQuizResults", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], QuizResultsComponent.prototype, "correctAnswers", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], QuizResultsComponent.prototype, "socialDesc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], QuizResultsComponent.prototype, "socialImage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], QuizResultsComponent.prototype, "onBackToHeroes", void 0);
    QuizResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-quiz-results',
            templateUrl: '../quiz-results/quiz-results.component.html',
        }),
        __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
    ], QuizResultsComponent);
    return QuizResultsComponent;
}());
exports.QuizResultsComponent = QuizResultsComponent;
//# sourceMappingURL=quiz-results.component.js.map