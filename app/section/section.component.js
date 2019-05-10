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
var section_service_1 = require("../section/section.service");
var hero_1 = require("../hero/hero");
var hero_service_1 = require("../hero/hero.service");
var analytics_service_1 = require("../analytics/analytics.service");
var SectionComponent = /** @class */ (function () {
    function SectionComponent(sectionService, heroService, analyticsService) {
        this.sectionService = sectionService;
        this.heroService = heroService;
        this.analyticsService = analyticsService;
        this.socialDescDefault = "What's your %23email superpower%3F Take our quiz and find out where your skills can take you. %23EmailHeroes";
        this.socialTags = "%23EmailHeroes";
        this.socialImageDefault = "https://digital.returnpath.com/rpstatic/images/social/emailheroes-socialshare-default.jpg";
        this.lighteningSound = new Audio("../music/lightening.mp3");
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaded = false;
        this.sectionService.getSections().subscribe(function (sections) { return _this.sections = sections; });
        this.heroService.getHeroes().subscribe(function (heroes) { return _this.heroes = heroes; });
        this.colorScheme = 'default';
        this.correctAnswers = 0;
        this.backToHeroes = false;
        this.quizResults = [];
        this.socialDesc = this.socialDescDefault;
        this.socialImage = this.socialImageDefault;
        this.lighteningActive = false;
        this.birdHuntActive = false;
        setTimeout(function () {
            _this.loaded = true;
        }, 1000);
    };
    SectionComponent.prototype.getSectionState = function (section) {
        return typeof section != 'undefined' ? section : new section_1.Section();
    };
    SectionComponent.prototype.getHeroState = function (hero) {
        return typeof hero != 'undefined' ? hero : new hero_1.Hero();
    };
    SectionComponent.prototype.showNextSection = function (s) {
        this.previousSection = this.getSectionState(this.sections[s]);
        this.activeSection = this.getSectionState(this.sections[s + 1]);
        this.nextSection = this.getSectionState(this.sections[s + 2]);
    };
    SectionComponent.prototype.showPrevSection = function (s) {
        this.previousSection = this.getSectionState(this.sections[s - 2]);
        this.activeSection = this.getSectionState(this.sections[s - 1]);
        this.nextSection = this.getSectionState(this.sections[s]);
    };
    SectionComponent.prototype.setActiveHero = function (h) {
        this.activeHero = this.getHeroState(this.heroes[h]);
        this.continueToQuiz = true;
        this.backToHeroes = false;
        this.colorScheme = this.activeHero.colorScheme;
    };
    SectionComponent.prototype.showHeroesSection = function () {
        this.activeHero = new hero_1.Hero();
        this.quizResults = [];
        this.activeQuestion = -1;
        this.previousQuestion = -1;
        this.showQuiz = false;
        this.showQuizResults = false;
        this.continueToQuiz = false;
        this.backToHeroes = true;
        this.colorScheme = 'default';
        this.showPrevSection(this.sections.length);
        this.socialDesc = this.socialDescDefault;
        this.socialImage = this.socialImageDefault;
    };
    SectionComponent.prototype.showHeroQuizSection = function (s) {
        this.showNextSection(s);
        this.heroesSection = this.sections[s];
        this.showQuiz = true;
        this.backToHeroes = false;
        this.totalQuestions = this.activeHero.quiz.questions.length;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.activeQuestion = 0;
        this.totalPossible = this.totalQuestions;
        for (var q = 0; q < this.totalQuestions; q++) {
            this.quizResults.push(false);
        }
        this.analyticsService.pushEvent('Quiz start', 'Quiz', this.activeHero.name);
    };
    SectionComponent.prototype.onQuestionAnswer = function (isCorrect) {
        this.quizResults[this.activeQuestion] = isCorrect;
        this.previousQuestion = this.activeQuestion;
        if (isCorrect) {
            this.correctAnswers++;
        }
        else {
            this.incorrectAnswers++;
            this.totalPossible = this.totalQuestions - this.incorrectAnswers;
        }
        this.activeQuestion++;
    };
    SectionComponent.prototype.onQuizEnd = function (endQuiz) {
        this.showQuiz = false;
        this.showQuizResults = endQuiz;
        if (this.correctAnswers == this.totalQuestions) {
            this.socialDesc = "I mastered " + this.activeHero.name + "! " + this.activeHero.socialMessage + " " + this.socialTags;
            this.socialImage = "https://digital.returnpath.com/rpstatic/images/social/emailheroes-socialshare-hero" + this.activeHero.colorScheme + ".jpg";
        }
        this.analyticsService.pushEvent('Quiz end', 'Quiz', this.activeHero.name);
        this.analyticsService.pushEvent(this.correctAnswers + '/' + this.totalQuestions, 'Quiz Results', this.activeHero.name);
    };
    SectionComponent.prototype.onBackToHeroes = function (toHeroes) {
        this.showHeroesSection();
    };
    SectionComponent.prototype.onRideTheLightening = function (lighteningActive) {
        var _this = this;
        this.lighteningActive = true;
        this.lighteningSound.loop = true;
        this.lighteningSound.volume = 1.0;
        this.lighteningSound.play();
        setTimeout(function () {
            _this.lighteningSound.pause();
            _this.lighteningSound.currentTime = 0;
            _this.lighteningActive = false;
        }, 5000);
    };
    SectionComponent.prototype.onEnableBirdHunt = function (birdHuntActive) {
        this.birdHuntActive = true;
    };
    SectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-section',
            templateUrl: '../section/section.component.html',
        }),
        __metadata("design:paramtypes", [section_service_1.SectionService,
            hero_service_1.HeroService,
            analytics_service_1.AnalyticsService])
    ], SectionComponent);
    return SectionComponent;
}());
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=section.component.js.map