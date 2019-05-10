"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function _window() {
    return window;
}
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService() {
    }
    Object.defineProperty(AnalyticsService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    AnalyticsService.prototype.pushEvent = function (action, category, label) {
        var window = this.nativeWindow;
        if (typeof window.dataLayer === 'object') {
            var dataLayer = window.dataLayer;
            dataLayer.push({
                'event': 'gtm.emailHeroes',
                'eventAction': action,
                'eventCategory': category,
                'eventLabel': label
            });
        }
    };
    AnalyticsService = __decorate([
        core_1.Injectable()
    ], AnalyticsService);
    return AnalyticsService;
}());
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map