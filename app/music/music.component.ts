import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Section } from '../section/section';
import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'rp-music',
    templateUrl: '../music/music.component.html',
})

export class MusicComponent implements OnInit, OnChanges {
    @Input() showQuiz: boolean;
    @Input() showQuizResults: boolean;
    @Input() backToHeroes: boolean;
    @Input() totalQuestions: number;
    @Input() correctAnswers: number;
    songs = [
        new Audio("../music/eh-intro-supreme-avengers.mp3"),
        new Audio("../music/eh-quiz-battlefield.mp3"),
        new Audio("../music/eh-hero-adventureland.mp3"),
        new Audio("../music/eh-villain-day-of-the-living.mp3")
    ];
    currentSong: number;
    muted: boolean;
    volumes = [0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
    timeInterval = 200;

    ngOnInit(): void {
        this.muted = false;
        this.currentSong = 0;
        this.songs.forEach(function(song) {
            song.preload = "auto";
            song.loop = true;
            song.volume = 0.0;
        });
        this.songs[this.currentSong].volume = 1.0;
        this.songs[this.currentSong].play();
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);

            if (propName == 'backToHeroes' && cur == 'true') {
                this.changeSong(0);
            }

            if (propName == 'showQuiz' && cur == 'true') {
                this.changeSong(1);
            }

            if (propName == 'showQuizResults' && cur == 'true') {
                if (this.correctAnswers == this.totalQuestions) {
                    this.changeSong(2);
                } else {
                    this.changeSong(3);
                }
            }
        }
    }

    muteMusic(): void {
        if (!this.muted) {
            this.songs[this.currentSong].pause();
            this.muted = true;
        } else {
            this.songs[this.currentSong].play();
            this.muted = false;
        }
    }

    changeSong(s: number): void {
        if (!this.muted) {
            this.volumes.forEach((v, i) => {
                if (i == 0) {
                    this.songs[s].volume = 0.0;
                    this.songs[s].play();
                }

                setTimeout(() => {
                   this.songs[this.currentSong].volume = v;
                   this.songs[s].volume = 1 - v;
                }, this.timeInterval*i);
            });

            setTimeout(() => {
                this.songs[this.currentSong].pause();
                this.songs[this.currentSong].currentTime = 0;
                this.currentSong = s;
            }, this.timeInterval*this.volumes.length);
        } else {
            this.songs[this.currentSong].pause();
            this.songs[this.currentSong].currentTime = 0;
            this.currentSong = s;
            this.songs[this.currentSong].volume = 1.0;
        }
    }
}
