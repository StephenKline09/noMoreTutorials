import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallPageComponent } from './fall-page.component';

describe('FallPageComponent', () => {
  let component: FallPageComponent;
  let fixture: ComponentFixture<FallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
