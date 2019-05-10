import { Injectable } from '@angular/core';

function _window() : any {
   return window;
}

@Injectable()
export class AnalyticsService {
    get nativeWindow() : any {
        return _window();
    }

    pushEvent(action: string, category: string, label: string) {
        let window = this.nativeWindow;

        if (typeof window.dataLayer === 'object') {
            let dataLayer = window.dataLayer;

            dataLayer.push({
                'event': 'gtm.emailHeroes',
                'eventAction': action,
                'eventCategory': category,
                'eventLabel': label
            });
        }
    }
}