import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero/hero';

import { AnalyticsService } from '../analytics/analytics.service';

@Component({
    moduleId: module.id,
    selector: 'rp-quiz-results',
    templateUrl: '../quiz-results/quiz-results.component.html',
})

export class QuizResultsComponent {
    @Input() hero: Hero;
    @Input() showQuizResults: boolean;
    @Input() correctAnswers: number;
    @Input() socialDesc: string;
    @Input() socialImage: string;
    @Output() onBackToHeroes = new EventEmitter<boolean>();

    constructor(
        private analyticsService: AnalyticsService
    ) {}

    showHeroesSection() : void {
        this.onBackToHeroes.emit(true);
        this.analyticsService.pushEvent('Click', 'CTA', 'Back to Heroes - Quiz Results');
    }

    clickResource(url: string) : void {
        this.analyticsService.pushEvent('Click', 'CTA', url);
    }
}
