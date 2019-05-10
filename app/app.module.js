"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var app_component_1 = require("./app.component");
var section_component_1 = require("./section/section.component");
var navigation_component_1 = require("./navigation/navigation.component");
var lightening_component_1 = require("./lightening/lightening.component");
var bird_component_1 = require("./bird/bird.component");
var music_component_1 = require("./music/music.component");
var background_component_1 = require("./background/background.component");
var cloud_component_1 = require("./cloud/cloud.component");
var color_scheme_component_1 = require("./color-scheme/color-scheme.component");
var cityscape_component_1 = require("./cityscape/cityscape.component");
var quiz_component_1 = require("./quiz/quiz.component");
var quiz_results_component_1 = require("./quiz-results/quiz-results.component");
var section_service_1 = require("./section/section.service");
var hero_service_1 = require("./hero/hero.service");
var analytics_service_1 = require("./analytics/analytics.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                section_component_1.SectionComponent,
                navigation_component_1.NavigationComponent,
                lightening_component_1.LighteningComponent,
                bird_component_1.BirdComponent,
                music_component_1.MusicComponent,
                background_component_1.BackgroundComponent,
                cloud_component_1.CloudComponent,
                color_scheme_component_1.ColorSchemeComponent,
                cityscape_component_1.CityscapeComponent,
                quiz_component_1.QuizComponent,
                quiz_results_component_1.QuizResultsComponent
            ],
            providers: [
                section_service_1.SectionService,
                hero_service_1.HeroService,
                analytics_service_1.AnalyticsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map