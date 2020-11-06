import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmiapartnerComponent } from './prmiapartner.component';

describe('PrmiapartnerComponent', () => {
  let component: PrmiapartnerComponent;
  let fixture: ComponentFixture<PrmiapartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrmiapartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmiapartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
