import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserabletestComponent } from './obserabletest.component';

describe('ObserabletestComponent', () => {
  let component: ObserabletestComponent;
  let fixture: ComponentFixture<ObserabletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObserabletestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserabletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
