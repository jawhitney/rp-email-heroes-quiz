import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rp-lightening',
    templateUrl: '../lightening/lightening.component.html',
})

export class LighteningComponent {
    @Input() lighteningActive: boolean;
}
