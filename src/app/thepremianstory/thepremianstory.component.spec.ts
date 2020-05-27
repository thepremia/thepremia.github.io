import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThepremianstoryComponent } from './thepremianstory.component';

describe('ThepremianstoryComponent', () => {
  let component: ThepremianstoryComponent;
  let fixture: ComponentFixture<ThepremianstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThepremianstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThepremianstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
