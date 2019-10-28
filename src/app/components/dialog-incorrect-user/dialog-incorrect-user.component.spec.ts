import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIncorrectUserComponent } from './dialog-incorrect-user.component';

describe('DialogIncorrectUserComponent', () => {
  let component: DialogIncorrectUserComponent;
  let fixture: ComponentFixture<DialogIncorrectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogIncorrectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIncorrectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
