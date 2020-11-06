import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThepremianedgeComponent } from './thepremianedge.component';

describe('ThepremianedgeComponent', () => {
  let component: ThepremianedgeComponent;
  let fixture: ComponentFixture<ThepremianedgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThepremianedgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThepremianedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
