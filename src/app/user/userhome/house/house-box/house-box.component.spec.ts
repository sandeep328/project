import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBoxComponent } from './house-box.component';

describe('HouseBoxComponent', () => {
  let component: HouseBoxComponent;
  let fixture: ComponentFixture<HouseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
