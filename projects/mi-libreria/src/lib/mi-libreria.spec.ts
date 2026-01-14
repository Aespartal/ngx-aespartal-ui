import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiLibreria } from './mi-libreria';

describe('MiLibreria', () => {
  let component: MiLibreria;
  let fixture: ComponentFixture<MiLibreria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiLibreria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiLibreria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
