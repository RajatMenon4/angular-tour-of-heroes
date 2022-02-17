import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajatComponent } from './rajat.component';

describe('RajatComponent', () => {
  let component: RajatComponent;
  let fixture: ComponentFixture<RajatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
