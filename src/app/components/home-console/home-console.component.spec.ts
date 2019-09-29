import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsoleComponent } from './home-console.component';

describe('HomeConsoleComponent', () => {
  let component: HomeConsoleComponent;
  let fixture: ComponentFixture<HomeConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
