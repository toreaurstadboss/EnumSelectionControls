import { Component, OnInit, Input, Output } from "@angular/core";
import { EnumselectioncontrolsService } from "../enumselectioncontrols.service";
import { EnumItem } from "../enum-item";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "lib-enum-radio-button-list",
  templateUrl: "./radio-button-list.component.html",
  styleUrls: ["./radio-button-list.component.css"]
})
export class RadioButtonListComponent implements OnInit {
  @Input() enumtype: any;
  @Input() groupname: string;
  @Output() selectionChange = new EventEmitter();

  enumitems: EnumItem[] = [];
  selectedItem: any;

  constructor(private enumService: EnumselectioncontrolsService) {}

  ngOnInit() {
    // debugger;
    this.enumitems = this.enumService.buildEnumList(this.enumtype);
  }

  selectionChanged(selectedItem) {
    //debugger;
    this.selectedItem = selectedItem;
    this.selectionChange.emit(this.selectedItem);
  }
}
