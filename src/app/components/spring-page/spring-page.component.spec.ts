import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringPageComponent } from './spring-page.component';

describe('SpringPageComponent', () => {
  let component: SpringPageComponent;
  let fixture: ComponentFixture<SpringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
