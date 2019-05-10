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
var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
        this.onQuestionAnswer = new core_1.EventEmitter();
        this.onQuizEnd = new core_1.EventEmitter();
    }
    QuizComponent.prototype.answerQuestion = function (q, a) {
        this.chosen = a;
        this.onQuestionAnswer.emit(this.hero.quiz.questions[q].answers[a].isCorrect);
        if (this.activeQuestion + 1 >= this.hero.quiz.questions.length) {
            this.onQuizEnd.emit(true);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], QuizComponent.prototype, "activeQuestion", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], QuizComponent.prototype, "previousQuestion", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], QuizComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QuizComponent.prototype, "showQuizResults", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], QuizComponent.prototype, "onQuestionAnswer", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], QuizComponent.prototype, "onQuizEnd", void 0);
    QuizComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-quiz',
            templateUrl: '../quiz/quiz.component.html',
        })
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=quiz.component.js.map