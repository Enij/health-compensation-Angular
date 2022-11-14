import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public title: string = 'health-compensation';
    public maxDays: number = 182;
    public form!: FormGroup;
    public avgIncome: number = 0;
    public employerCompensates: number = 0;
    public insuranceCompensates: number = 0;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            avgIncome: [0],
            sickDays: [0],
            haveTubercolosis: [false]
        });
    }

    public calcCompensation() {
        this.avgIncome = this.form.value.avgIncome / 30 * 0.7 * 0.8;
        this.insuranceCompensates = 0;
        if (this.form.value.haveTubercolosis) {
            this.maxDays = 240;
        } else {
            this.maxDays = 182;
        }

        if (this.form.value.sickDays && this.form.value.sickDays > 8 && this.form.value.sickDays <= this.maxDays) {
            this.insuranceCompensates = this.form.value.sickDays - 8;
            this.employerCompensates = this.form.value.sickDays - this.insuranceCompensates - 3;
        } else if (this.form.value.sickDays && this.form.value.sickDays >= 4 && this.form.value.sickDays <= 8) {
            this.employerCompensates = this.form.value.sickDays - 3;
        } else {
            this.employerCompensates = 0;
        }
    }
}
