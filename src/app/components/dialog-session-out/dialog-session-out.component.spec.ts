import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSessionOutComponent } from './dialog-session-out.component';

describe('DialogSessionOutComponent', () => {
  let component: DialogSessionOutComponent;
  let fixture: ComponentFixture<DialogSessionOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSessionOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSessionOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
