import { Component, OnInit, Input, Output } from "@angular/core";
import { EnumselectioncontrolsService } from "./enumselectioncontrols.service";
import { EnumItem } from "./enum-item";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "lib-enum-select",
  templateUrl: "./selection.component.html",
  styles: []
})
export class EnumselectioncontrolsComponent implements OnInit {
  @Input() enumtype: any;
  @Output() selectionChange = new EventEmitter();

  enumitems: EnumItem[] = [];
  selectedItem: any;

  constructor(private enumService: EnumselectioncontrolsService) {}

  ngOnInit() {
    // debugger;
    this.enumitems = this.enumService.buildEnumList(this.enumtype);
  }

  selectionChanged() {
    //debugger;
    this.selectionChange.emit(this.selectedItem);
  }
}
