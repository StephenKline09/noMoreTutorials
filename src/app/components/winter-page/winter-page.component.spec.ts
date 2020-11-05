import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterPageComponent } from './winter-page.component';

describe('WinterPageComponent', () => {
  let component: WinterPageComponent;
  let fixture: ComponentFixture<WinterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
