import { Component, Input } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'rp-color-scheme',
    templateUrl: '../color-scheme/color-scheme.component.html',
})

export class ColorSchemeComponent {
    @Input() hero: Hero;
    @Input() activeHero: Hero;
}
