import { Component, Input } from '@angular/core';

@Component({
    selector: 'info-component',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class InfoComponent {
    @Input() info: string = '';
    @Input() daysCompensated: number = 0;
    @Input() compIncome: number = 0;
}
