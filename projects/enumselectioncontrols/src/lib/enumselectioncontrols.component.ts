import { Component, OnInit, Input } from "@angular/core";
import { EnumselectioncontrolsService } from "./enumselectioncontrols.service";
import { EnumItem } from "./enum-item";

@Component({
  selector: 'lib-enumdropdown',
  templateUrl: "./enumselectioncontrols.component.html",
  styles: []
})
export class EnumselectioncontrolsComponent implements OnInit {
  @Input() enumType: any;
  @Input() htmlId: string;

  enumitems: EnumItem[] = [];
  id: string;

  constructor(private enumService: EnumselectioncontrolsService) {}

  ngOnInit() {
    this.enumitems = this.enumService.buildEnumList(this.enumType);
  }
}
