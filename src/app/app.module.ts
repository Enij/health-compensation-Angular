import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputComponent } from 'src/components/input/input.component';
import { InfoComponent } from 'src/components/info/info.component';
import { registerLocaleData } from '@angular/common';
import localeEt from '@angular/common/locales/et';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeEt);

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    providers: [{
        provide: LOCALE_ID,
        useValue: 'et-EE'
    },
    {
        provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
