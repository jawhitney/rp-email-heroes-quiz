import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Section } from '../section/section';
import { Hero } from '../hero/hero';

import { AnalyticsService } from '../analytics/analytics.service';

@Component({
    moduleId: module.id,
    selector: 'rp-navigation',
    templateUrl: '../navigation/navigation.component.html',
})

export class NavigationComponent {
    @Input() section: Section;
    @Input() correctAnswers: number;
    @Input() totalQuestions: number;
    @Input() hero: Hero;
    @Input() showQuiz: boolean;
    @Input() showQuizResults: boolean;
    @Input() activeQuestion: number;
    @Input() quizResults: boolean[];
    @Output() onBackToHeroes = new EventEmitter<boolean>();
    @Output() onRideTheLightening = new EventEmitter<boolean>();
    @Output() onEnableBirdHunt = new EventEmitter<boolean>();

    constructor(
        private analyticsService: AnalyticsService
    ) {}

    showHeroesSection() : void {
        this.onBackToHeroes.emit(true);
        this.correctAnswers = 0;
        this.analyticsService.pushEvent('Click', 'CTA', 'Back to Heroes - Navigation');
    }

    enableEasterEggs() : void {
        this.onRideTheLightening.emit(true);
        this.onEnableBirdHunt.emit(true);
    }
}
