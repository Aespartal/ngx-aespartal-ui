import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomBadge } from './atom-badge';

describe('AtomBadge', () => {
  let component: AtomBadge;
  let fixture: ComponentFixture<AtomBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
