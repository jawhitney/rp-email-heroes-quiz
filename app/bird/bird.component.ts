import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rp-bird',
    templateUrl: '../bird/bird.component.html',
})

export class BirdComponent implements OnInit {
    @Input() birdHuntActive: boolean;
    birdsMax: number;
    birdsHit: number;
    birds: number[];
    burstStatus: any;
    hideStatus: any;
    hitBirdSound = new Audio("../music/hit-bird.mp3");
    gunSound = new Audio("../music/gun.mp3");

    ngOnInit(): void {
        this.birdsHit = 0;
        this.birdsMax = 10;
        this.birds = [];
        this.burstStatus = {};
        this.hideStatus = {};
        this.hitBirdSound.volume = 1.0;
        this.gunSound.volume = 1.0;

        for (var i = 0; i < this.birdsMax; i++) {
            this.birds.push(i);
            this.burstStatus[i] = false;
            this.hideStatus[i] = false;
        }
    }

    shootBird(): void {
        if (this.birdHuntActive) {
            this.gunSound.play();
        }
    }

    resetBirds(): void {
        for (var i = 0; i < this.birdsMax; i++) {
            this.burstStatus[i] = false;
            this.hideStatus[i] = false;
        }
    }

    hitBird(n: number): void {
        this.burstStatus[n] = true;
        this.hitBirdSound.play();
        this.birdsHit++;

        setTimeout(() => {
            this.hitBirdSound.pause();
            this.hitBirdSound.currentTime = 0;
            this.hideStatus[n] = true;

            if (this.birdsHit == this.birdsMax) {
                this.resetBirds();
            }
        }, 1000);
    }
}
