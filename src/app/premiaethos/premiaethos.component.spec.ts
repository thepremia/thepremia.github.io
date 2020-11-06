import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiaethosComponent } from './premiaethos.component';

describe('PremiaethosComponent', () => {
  let component: PremiaethosComponent;
  let fixture: ComponentFixture<PremiaethosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiaethosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiaethosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
