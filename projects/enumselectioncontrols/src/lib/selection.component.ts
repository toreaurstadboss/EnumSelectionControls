import { Component, OnInit, Input } from "@angular/core";
import { EnumselectioncontrolsService } from "./enumselectioncontrols.service";
import { EnumItem } from "./enum-item";

@Component({
  selector: "lib-enum-select",
  templateUrl: "./selection.component.html",
  styles: []
})
export class EnumselectioncontrolsComponent implements OnInit {
  @Input() enumtype: any;
  @Input() htmlId: string;
  @Input() fieldname: string;

  enumitems: EnumItem[] = [];
  id: string;

  constructor(private enumService: EnumselectioncontrolsService) {}

  ngOnInit() {
    this.enumitems = this.enumService.buildEnumList(this.enumtype);
  }
}
