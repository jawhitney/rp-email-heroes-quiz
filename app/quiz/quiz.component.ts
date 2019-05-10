import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'rp-quiz',
    templateUrl: '../quiz/quiz.component.html',
})

export class QuizComponent {
    @Input() activeQuestion: number;
    @Input() previousQuestion: number;
    @Input() hero: Hero;
    @Input() showQuizResults: boolean;
    @Output() onQuestionAnswer = new EventEmitter<boolean>();
    @Output() onQuizEnd = new EventEmitter<boolean>();
    chosen: number;

    answerQuestion(q: number, a: number) : void {
        this.chosen = a;
        this.onQuestionAnswer.emit(this.hero.quiz.questions[q].answers[a].isCorrect);

        if (this.activeQuestion + 1 >= this.hero.quiz.questions.length) {
            this.onQuizEnd.emit(true);
        }
    }
}
