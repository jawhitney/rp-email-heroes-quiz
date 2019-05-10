import { Component, OnInit, Input } from '@angular/core';
import {ShareButton, ShareProvider} from "ng2-sharebuttons";

import { AnalyticsService } from '../analytics/analytics.service';

@Component({
    moduleId: module.id,
    selector: 'rp-social',
    templateUrl: '../social/social.component.html',
})

export class SocialComponent implements OnInit {
    @Input() isInline: boolean;
    @Input() socialDesc: string;
    @Input() socialImage: string;
    twButton: ShareButton;
    fbButton: ShareButton;
    liButton: ShareButton;
    piButton: ShareButton;
    rpCdnUrl = 'https://digital.returnpath.com/rpstatic/images/addtoany/';
    hideSocial: boolean;
    url = 'https://returnpath.com/superpowers';
    title = 'Guardians of the Email Universe';

    constructor(
        private analyticsService: AnalyticsService
    ) {}

    ngOnInit() {
        this.twButton = new ShareButton(
            ShareProvider.TWITTER,
            "<img src='" + this.rpCdnUrl + "twitter.png'>",
            'twitter'
        );
        this.fbButton = new ShareButton(
            ShareProvider.FACEBOOK,
            "<img src='" + this.rpCdnUrl + "facebook.png'>",
            'facebook'
        );
        this.liButton = new ShareButton(
            ShareProvider.LINKEDIN,
            "<img src='" + this.rpCdnUrl + "linkedin.png'>",
            'linkedin'
        );
        this.piButton = new ShareButton(
            ShareProvider.PINTEREST,
            "<img src='" + this.rpCdnUrl + "pinterest.png'>",
            'pinterest'
        );

        this.hideSocial = false;
    }

    showHideSocial() : void {
        this.hideSocial = this.hideSocial ? false : true;
    }

    shareClick(type: string) : void {
        this.analyticsService.pushEvent('Click', 'Social', type);
    }
}
