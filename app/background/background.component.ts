import { Component, Input } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'rp-background',
    templateUrl: '../background/background.component.html',
})

export class BackgroundComponent {
    @Input() template: string;
    @Input() hero: Hero;
    @Input() incorrectAnswers: number;
    @Input() showSunburst: boolean;
    @Input() showQuiz: boolean;
    @Input() showQuizResults: boolean;
    @Input() backToHeroes: boolean;
}
