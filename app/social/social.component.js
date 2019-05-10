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
var ng2_sharebuttons_1 = require("ng2-sharebuttons");
var analytics_service_1 = require("../analytics/analytics.service");
var SocialComponent = /** @class */ (function () {
    function SocialComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.rpCdnUrl = 'https://digital.returnpath.com/rpstatic/images/addtoany/';
        this.url = 'https://returnpath.com/superpowers';
        this.title = 'Guardians of the Email Universe';
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.twButton = new ng2_sharebuttons_1.ShareButton(ng2_sharebuttons_1.ShareProvider.TWITTER, "<img src='" + this.rpCdnUrl + "twitter.png'>", 'twitter');
        this.fbButton = new ng2_sharebuttons_1.ShareButton(ng2_sharebuttons_1.ShareProvider.FACEBOOK, "<img src='" + this.rpCdnUrl + "facebook.png'>", 'facebook');
        this.liButton = new ng2_sharebuttons_1.ShareButton(ng2_sharebuttons_1.ShareProvider.LINKEDIN, "<img src='" + this.rpCdnUrl + "linkedin.png'>", 'linkedin');
        this.piButton = new ng2_sharebuttons_1.ShareButton(ng2_sharebuttons_1.ShareProvider.PINTEREST, "<img src='" + this.rpCdnUrl + "pinterest.png'>", 'pinterest');
        this.hideSocial = false;
    };
    SocialComponent.prototype.showHideSocial = function () {
        this.hideSocial = this.hideSocial ? false : true;
    };
    SocialComponent.prototype.shareClick = function (type) {
        this.analyticsService.pushEvent('Click', 'Social', type);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SocialComponent.prototype, "isInline", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SocialComponent.prototype, "socialDesc", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SocialComponent.prototype, "socialImage", void 0);
    SocialComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rp-social',
            templateUrl: '../social/social.component.html',
        }),
        __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
    ], SocialComponent);
    return SocialComponent;
}());
exports.SocialComponent = SocialComponent;
//# sourceMappingURL=social.component.js.map