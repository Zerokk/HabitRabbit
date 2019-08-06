import { NgModule } from '@angular/core';
import { FormularyComponent } from './formulary/formulary.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormularyComponent
    ],
    exports: [
        FormularyComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    providers: []
})
export class ComponentsModule { }
