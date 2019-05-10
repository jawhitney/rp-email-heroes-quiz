import { Component, Input } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'rp-cloud',
    templateUrl: '../cloud/cloud.component.html',
})

export class CloudComponent {
    @Input() colorScheme: string;
}
