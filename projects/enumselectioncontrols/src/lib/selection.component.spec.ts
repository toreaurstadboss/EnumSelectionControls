import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumselectioncontrolsComponent } from './selection.component';

describe('EnumselectioncontrolsComponent', () => {
  let component: EnumselectioncontrolsComponent;
  let fixture: ComponentFixture<EnumselectioncontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumselectioncontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumselectioncontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
