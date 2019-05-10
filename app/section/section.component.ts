import { Component, OnInit } from '@angular/core';

import { Section } from '../section/section';
import { SectionService } from '../section/section.service';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

import { AnalyticsService } from '../analytics/analytics.service';

@Component({
    moduleId: module.id,
    selector: 'rp-section',
    templateUrl: '../section/section.component.html',
})

export class SectionComponent implements OnInit {
    socialDescDefault = "What's your %23email superpower%3F Take our quiz and find out where your skills can take you. %23EmailHeroes";
    socialTags = "%23EmailHeroes";
    socialImageDefault = "https://digital.returnpath.com/rpstatic/images/social/emailheroes-socialshare-default.jpg";
    sections: Section[];
    heroes: Hero[];
    nextSection: Section;
    previousSection: Section;
    heroesSection: Section;
    activeSection: Section;
    activeHero: Hero;
    loaded: boolean;
    showHero: boolean;
    showQuiz: boolean;
    showQuizResults: boolean;
    continueToQuiz: boolean;
    backToHeroes: boolean;
    colorScheme: string;
    activeQuestion: number;
    previousQuestion: number;
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    totalPossible: number;
    quizResults: boolean[];
    socialDesc: string;
    socialImage: string;
    lighteningActive: boolean;
    lighteningSound = new Audio("../music/lightening.mp3");
    birdHuntActive: boolean;

    constructor(
        private sectionService: SectionService,
        private heroService: HeroService,
        private analyticsService: AnalyticsService
    ) {}

    ngOnInit(): void {
        this.loaded = false;
        this.sectionService.getSections().subscribe(sections => this.sections = sections);
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
        this.colorScheme = 'default';
        this.correctAnswers = 0;
        this.backToHeroes = false;
        this.quizResults = [];
        this.socialDesc = this.socialDescDefault;
        this.socialImage = this.socialImageDefault;
        this.lighteningActive = false;
        this.birdHuntActive = false;

        setTimeout(() => {
            this.loaded = true;
        }, 1000);
    }

    getSectionState(section: Section) {
        return typeof section != 'undefined' ? section : new Section();
    }

    getHeroState(hero: Hero) {
        return typeof hero != 'undefined' ? hero : new Hero();
    }

    showNextSection(s: number) : void {
        this.previousSection = this.getSectionState(this.sections[s]);
        this.activeSection = this.getSectionState(this.sections[s + 1]);
        this.nextSection = this.getSectionState(this.sections[s + 2]);
    }

    showPrevSection(s: number) : void {
        this.previousSection = this.getSectionState(this.sections[s - 2]);
        this.activeSection = this.getSectionState(this.sections[s - 1]);
        this.nextSection = this.getSectionState(this.sections[s]);
    }

    setActiveHero(h: number) : void {
        this.activeHero = this.getHeroState(this.heroes[h]);
        this.continueToQuiz = true;
        this.backToHeroes = false;
        this.colorScheme = this.activeHero.colorScheme;
    }

    showHeroesSection() : void {
        this.activeHero = new Hero();
        this.quizResults = [];
        this.activeQuestion = -1;
        this.previousQuestion = -1;
        this.showQuiz = false;
        this.showQuizResults = false;
        this.continueToQuiz = false;
        this.backToHeroes = true;
        this.colorScheme = 'default';
        this.showPrevSection(this.sections.length);
        this.socialDesc = this.socialDescDefault;
        this.socialImage = this.socialImageDefault;
    }

    showHeroQuizSection(s: number) : void {
        this.showNextSection(s);
        this.heroesSection = this.sections[s];
        this.showQuiz = true;
        this.backToHeroes = false;
        this.totalQuestions = this.activeHero.quiz.questions.length;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.activeQuestion = 0;
        this.totalPossible = this.totalQuestions;

        for (var q = 0; q < this.totalQuestions; q++) {
            this.quizResults.push(false);
        }

        this.analyticsService.pushEvent('Quiz start', 'Quiz', this.activeHero.name);
    }

    onQuestionAnswer(isCorrect: boolean) : void {
        this.quizResults[this.activeQuestion] = isCorrect;
        this.previousQuestion = this.activeQuestion;

        if (isCorrect) {
            this.correctAnswers++;
        } else {
            this.incorrectAnswers++;
            this.totalPossible = this.totalQuestions - this.incorrectAnswers;
        }

        this.activeQuestion++;
    }

    onQuizEnd(endQuiz: boolean) : void {
        this.showQuiz = false;
        this.showQuizResults = endQuiz;

        if (this.correctAnswers == this.totalQuestions) {
            this.socialDesc = "I mastered " + this.activeHero.name + "! " + this.activeHero.socialMessage + " " + this.socialTags;
            this.socialImage = "https://digital.returnpath.com/rpstatic/images/social/emailheroes-socialshare-hero" + this.activeHero.colorScheme + ".jpg";
        }

        this.analyticsService.pushEvent('Quiz end', 'Quiz', this.activeHero.name);
        this.analyticsService.pushEvent(this.correctAnswers + '/' + this.totalQuestions, 'Quiz Results', this.activeHero.name);
    }

    onBackToHeroes(toHeroes: boolean) : void {
        this.showHeroesSection();
    }

    onRideTheLightening(lighteningActive: boolean) : void {
        this.lighteningActive = true;
        this.lighteningSound.loop = true;
        this.lighteningSound.volume = 1.0;
        this.lighteningSound.play();

        setTimeout(() => {
            this.lighteningSound.pause();
            this.lighteningSound.currentTime = 0;
            this.lighteningActive = false;
        }, 5000);
    }

    onEnableBirdHunt(birdHuntActive: boolean) : void {
        this.birdHuntActive = true;
    }
}
