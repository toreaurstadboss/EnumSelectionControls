import { NgModule } from '@angular/core';
import { EnumselectioncontrolsComponent } from './enumselectioncontrols.component';
import { RadioButtonListComponent } from './radio-button-list/radio-button-list.component';



@NgModule({
  declarations: [EnumselectioncontrolsComponent, RadioButtonListComponent],
  imports: [
  ],
  exports: [EnumselectioncontrolsComponent]
})
export class EnumselectioncontrolsModule { }
