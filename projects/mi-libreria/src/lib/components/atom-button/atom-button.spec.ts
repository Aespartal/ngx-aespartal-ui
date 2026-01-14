import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButton } from './atom-button';

describe('AtomButton', () => {
  let component: AtomButton;
  let fixture: ComponentFixture<AtomButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
