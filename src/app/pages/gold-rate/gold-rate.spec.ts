import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldRate } from './gold-rate';

describe('GoldRate', () => {
  let component: GoldRate;
  let fixture: ComponentFixture<GoldRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldRate],
    }).compileComponents();

    fixture = TestBed.createComponent(GoldRate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
