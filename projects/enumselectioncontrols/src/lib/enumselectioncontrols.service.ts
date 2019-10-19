import { Injectable } from "@angular/core";
import { EnumItem } from "./enum-item";

@Injectable({
  providedIn: "root"
})
export class EnumselectioncontrolsService {
  constructor() {}

  buildEnumList<TEnum>(enumType: TEnum): EnumItem[] {
    const enumList = Object.keys(enumType)
      .filter(key => Number(key) || key === "0")
      .map(function(key) {
        return { text: enumType[key], value: key };
      });
    let enumListMapped = new Array();
    enumList.forEach(kvp => {
      var enumToAdd = new EnumItem();
      enumToAdd.Text = kvp.text;
      enumToAdd.Value = kvp.value;
      enumListMapped.push(enumToAdd);
    });
    return enumListMapped;
  }
}
