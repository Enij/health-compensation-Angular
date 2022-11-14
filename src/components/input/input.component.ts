import { Component, Input, Self, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
    selector: 'input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class InputComponent {
    @Input() label: string = '';
    @Input() unit = '';

    onChange: (value: any) => void = () => {};
    onTouched: () => void = () => {};

    constructor(@Self() public controlDir: NgControl) {
        controlDir.valueAccessor = this;
    }

    ngOnInit(): void {
        const control = this.controlDir.control;
    }

    writeValue(value: any): void {
        value && this.controlDir.control?.setValue(value, { emitEvent: false });
    }

    registerOnChange(onChange: (value: any) => void): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }
}
