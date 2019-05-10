import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rp-cityscape',
    templateUrl: '../cityscape/cityscape.component.html',
})

export class CityscapeComponent {
    @Input() showQuiz: string;
    @Input() showQuizResults: string;
    @Input() colorScheme: string;
    cityscapeNumber: number;
    maxBuildings: number;
    baseHeight: number;
    buildings: string[];

    ngOnInit(): void {
        this.maxBuildings = 100;
        this.buildings = [];
        this.generateCityscape();
    }

    generateCityscape(): void {

        this.cityscapeNumber = Math.floor(Math.random() * 4) +1;

    }

    onSwitchHero(switchHero: boolean) : void {
        this.generateCityscape();
    }
}
