import { NgModule } from "@angular/core";
import { EnumselectioncontrolsComponent } from "./enumselectioncontrols.component";
import { RadioButtonListComponent } from "./radio-button-list/radio-button-list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [EnumselectioncontrolsComponent, RadioButtonListComponent],
  imports: [BrowserModule],
  exports: [EnumselectioncontrolsComponent]
})
export class EnumselectioncontrolsModule {}
