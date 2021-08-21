import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteInfoComponent } from './qoute-info.component';

describe('QouteInfoComponent', () => {
  let component: QouteInfoComponent;
  let fixture: ComponentFixture<QouteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QouteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
