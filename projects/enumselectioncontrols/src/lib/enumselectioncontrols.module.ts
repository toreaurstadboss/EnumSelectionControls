import { NgModule } from "@angular/core";
import { EnumselectioncontrolsComponent } from "./selection.component";
import { RadioButtonListComponent } from "./radio-button-list/radio-button-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EnumselectioncontrolsComponent, RadioButtonListComponent],
  imports: [BrowserModule, FormsModule],
  exports: [EnumselectioncontrolsComponent, RadioButtonListComponent]
})
export class EnumselectioncontrolsModule {}
