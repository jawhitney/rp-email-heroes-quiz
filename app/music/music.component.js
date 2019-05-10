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
var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
        this.songs = [
            new Audio("../music/eh-intro-supreme-avengers.mp3"),
            new Audio("../music/eh-quiz-battlefield.mp3"),
            new Audio("../music/eh-hero-adventureland.mp3"),
            new Audio("../music/eh-villain-day-of-the-living.mp3")
        ];
        this.volumes = [0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
        this.timeInterval = 200;
    }
    MusicComponent.prototype.ngOnInit = function () {
        this.muted = false;
        this.currentSong = 0;
        this.songs.forEach(function (song) {
            song.preload = "auto";
            song.loop = true;
            song.volume = 0.0;
        });
        this.songs[this.currentSong].volume = 1.0;
        this.songs[this.currentSong].play();
    };
    MusicComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            if (propName == 'backToHeroes' && cur == 'true') {
                this.changeSong(0);
            }
            if (propName == 'showQuiz' && cur == 'true') {
                this.changeSong(1);
            }
            if (propName == 'showQuizResults' && cur == 'true') {
                if (this.correctAnswers == this.totalQuestions) {
                    this.changeSong(2);
                }
                else {
                    this.changeSong(3);
                }
            }
        }
    };
    MusicComponent.prototype.muteMusic = function () {
        if (!this.muted) {
            this.songs[this.currentSong].pause();
            this.muted = true;
        }
        else {
            this.songs[this.currentSong].play();
            this.muted = false;
        }
    };
    MusicComponent.prototype.changeSong = function (s) {
        var _this = this;
        if (!this.muted) {
            this.volumes.forEach(function (v, i) {
                if (i == 0) {
                    _this.songs[s].volume = 0.0;
                    _this.songs[s].play();
                }
                setTimeout(function () {
                    _this.songs[_this.currentSong].volume = v;
                    _this.songs[s].volume = 1 - v;
                }, _this.timeInterval * i);
            });
            setTimeout(function () {
                _this.songs[_this.currentSong].pause();
                _this.songs[_this.currentSong].currentTime = 0;
                _this.currentSong = s;
            }, this.timeInterval * this.volumes.length);
        }
        else {
            this.songs[this.currentSong].pause();
            this.songs[this.currentSong].currentTime = 0;
            this.currentSong = s;
            this.songs[this.currentSong].volume = 1.0;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MusicComponent.prototype, "showQuiz", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MusicComponent.prototype, "showQuizResults", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MusicComponent.prototype, "backToHeroes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MusicComponent.prototype, "totalQuestions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MusicComponent.prototype, "correctAnswers", void 0);
    MusicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-music',
            templateUrl: '../music/music.component.html',
        })
    ], MusicComponent);
    return MusicComponent;
}());
exports.MusicComponent = MusicComponent;
//# sourceMappingURL=music.component.js.map