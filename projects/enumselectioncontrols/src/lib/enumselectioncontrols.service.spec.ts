import { TestBed } from "@angular/core/testing";

import { EnumselectioncontrolsService } from "./enumselectioncontrols.service";
import { SomeEnum } from "./some-enum";
import { EnumItem } from "./enum-item";

describe("EnumselectioncontrolsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EnumselectioncontrolsService = TestBed.get(
      EnumselectioncontrolsService
    );
    expect(service).toBeTruthy();
  });

  it("should parse an enum and build an array of EnumItem", () => {
    const service: EnumselectioncontrolsService = TestBed.get(
      EnumselectioncontrolsService
    );
    debugger;

    //const someEnum = SomeEnum.Yes;
    let enums = service.buildEnumList(SomeEnum);
  });
});
